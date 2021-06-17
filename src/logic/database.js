import Gun from "gun";
import { getRandomGameKey } from "./utility";
import { appVersion, CLIENT_SCENES } from "./constants";

const G = Gun(["https://project-bg.herokuapp.com/gun"]);
let connected = false;

/* Base game ops */

export const createGame = (clientData) => {
  const newGame = {
    key: getRandomGameKey(),
    appVersion: appVersion,
    creatorDeviceId: clientData.deviceId,
  };

  G.get(newGame.key).put(newGame, (ack) => console.log("Created game: ", ack));

  return newGame;
};

const deleteGame = (key) => {
  G.get(key).put({ key: null });
};

const downloadGame = (key, onChange) => {
  G.get(key).once((requestedGame) => {
    console.log("Game downloaded: ", requestedGame);
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

const existsGame = (key, addToastMessage) => {
  return new Promise((resolve) => {
    G.get(key).once((requestedGame) => {
      if (requestedGame?.key) {
        console.log("The game " + key + " exists: ", requestedGame);
        resolve(true);
      } else {
        console.log("The game " + key + " doesn't exists: ", requestedGame);
        addToastMessage("error", "The game " + key + " doesn't exists");
        resolve(false);
      }
    });
  });
};

const isMyGame = (key, clientData) => {
  return new Promise((resolve) => {
    G.get(key).once((requestedGame) => {
      if (requestedGame?.creatorDeviceId === clientData.deviceId) {
        console.log("The game " + key + " is mine: ", requestedGame);
        resolve(true);
      } else {
        console.log("The game " + key + " is not mine: ", requestedGame);
        resolve(false);
      }
    });
  });
};

const gameIsDifferentVersion = (key) => {
  return new Promise((resolve) => {
    G.get(key).once((requestedGame) => {
      if (requestedGame?.appVersion !== appVersion) {
        console.log(
          "The game " + key + " is of a compatible version: ",
          requestedGame
        );
        resolve(true);
      } else {
        console.log(
          "The game " + key + " is of an incompatible version: ",
          requestedGame
        );
        resolve(false);
      }
    });
  });
};

/* Complex game ops */

export const joinGame = async (key, clientData, onChange, addToastMessage, fnJoined) => {
  if (connected) leaveGame(connected, clientData);
  console.log("Joining game: ", key);
  if (!key || key.length !== 4) return false;

  const gameExists = await existsGame(key, addToastMessage);

  if (gameExists) {
    const gameDifferentVersion = await gameIsDifferentVersion(key);

    if (gameDifferentVersion) {
      // Se il game è il mio lo elimino
      const gameIsMine = await isMyGame(key, clientData);
      if (gameIsMine) deleteGame(key);
      return false;
    }

    downloadGame(key, onChange);
    subscribeGame(key, onChange);
    connected = key;
    fnJoined();
  }
};

export const leaveGame = async (key, clientData) => {
  if (!key) return;
  console.log("Leaving game: ", key);
  G.get(key).off();
  connected = null;
  // Se il game è il mio lo elimino
  const gameIsMine = await isMyGame(key, clientData);
  if (gameIsMine) deleteGame(key);
};

/* Gestione player */

export const updateMyPlayer = (clientData) => {
  if (!connected || !clientData.playerId) return;

  let myData = {};
  myData[clientData.playerId + "_deviceId"] = clientData.deviceId;
  myData[clientData.playerId + "_userName"] = clientData.userName;
  myData[clientData.playerId + "_clientScene"] = clientData.clientScene;

  if (clientData.clientScene === CLIENT_SCENES.CHARACTER_SELECTION) {
    myData[clientData.playerId + "_cursorX"] = clientData.cursor.x;
    myData[clientData.playerId + "_cursorY"] = clientData.cursor.y;
    myData[clientData.playerId + "_cursorHide"] = clientData.cursor.hide;
    myData[clientData.playerId + "_cursorText"] = clientData.cursor.text;
  }

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
