import Gun from "gun";
import { getRandomGameKey } from "./utility";
import { appVersion } from "./constants";

const G = Gun(["https://project-bg.herokuapp.com/gun"]);
let connected = false;

/* Base game ops */

export const createGame = (clientData) => {
  const newGame = {
    key: getRandomGameKey(),
    appVersion: appVersion,
    creatorDeviceId: clientData.deviceId,
  };

  G.get(newGame.key).put(newGame, (ack) => console.log("created game: ", ack));

  return newGame;
};

const deleteGame = (key) => {
  G.get(key).put({ key: null });
};

const downloadGame = (key, onChange) => {
  G.get(key).once((requestedGame) => {
    console.log("game downloaded: ", requestedGame);
    onChange(requestedGame);
  });
};

const subscribeGame = (key, onChange) => {
  G.get(key).on((value, key, _msg, _ev) => {
    // console.log({ value });
    // console.log({ key });
    // console.log({ _msg });
    // console.log({ _ev });
    onChange(value);
  }, true);
};

const ifExistGame = (key, fnTrue, fnFalse) => {
  G.get(key).once((requestedGame) => {
    if (requestedGame && requestedGame.key) {
      console.log("the game " + requestedGame.key + " exists", requestedGame);
      fnTrue();
    } else {
      console.error(
        "The game " + requestedGame.key + " doesn't exists.",
        requestedGame
      );
      fnFalse();
    }
  });
};

const ifIsMyGame = (key, clientData, fnTrue) => {
  G.get(key).once((requestedGame) => {
    if (
      requestedGame &&
      requestedGame.creatorDeviceId === clientData.deviceId
    ) {
      console.log("the game " + requestedGame.key + " is mine", requestedGame);
      fnTrue();
    }
  });
};

/* Complex game ops */

export const joinGame = (key, clientData, onChange, fnJoined) => {
  console.log("connected? ", connected);
  if (connected) leaveGame(connected, clientData);
  console.log("key? ", key);
  if (!key || key.length !== 4) return false;
  ifExistGame(
    key,
    () => {
      // exist
      downloadGame(key, onChange);
      subscribeGame(key, onChange);
      connected = key;
      fnJoined();
    },
    () => {
      // does not
    }
  );
};

export const leaveGame = (key, clientData) => {
  if (!key) return;
  G.get(key).off();
  connected = null;
  // Se il game è il mio lo elimino
  ifIsMyGame(key, clientData, () => deleteGame(key));
};

/* Gestione player */

export const updateMyPlayer = (clientData) => {
  if (!connected || !clientData.playerId) return;

  let myData = {};
  myData[clientData.playerId + "_deviceId"] = clientData.deviceId;
  myData[clientData.playerId + "_userName"] = clientData.userName;
  myData[clientData.playerId + "_clientScene"] = clientData.clientScene;
  myData[clientData.playerId + "_cursorX"] = clientData.cursor.x;
  myData[clientData.playerId + "_cursorY"] = clientData.cursor.y;
  myData[clientData.playerId + "_cursorHide"] = clientData.cursor.hide;
  myData[clientData.playerId + "_cursorText"] = clientData.cursor.text;

  G.get(connected).put(myData);
};

export const resetMyPlayer = (clientData) => {
  if (!connected || !clientData.playerId) return;

  let newData = {};
  newData[clientData.playerId + "_deviceId"] = null;
  newData[clientData.playerId + "_userName"] = null;
  newData[clientData.playerId + "_clientScene"] = null;
  newData[clientData.playerId + "_cursorX"] = null;
  newData[clientData.playerId + "_cursorY"] = null;
  newData[clientData.playerId + "_cursorHide"] = null;
  newData[clientData.playerId + "_cursorText"] = null;

  G.get(connected).put(newData);
};
