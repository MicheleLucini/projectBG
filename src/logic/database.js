import Gun from "gun";
import { getRandomGameKey } from "./utility";

const G = Gun(["https://project-bg.herokuapp.com/gun"]);

const resetGame = (key) => {
  G.get(key).put(null);
};

// export const saveGame = (game) => {
//   G.get(game.key).put(game, (ack) => {
//     // console.log("game saved:", ack);
//   });
// };

// export const createGame = (gamePhase) => {
//   const gameObj = {
//     key: getRandomGameKey(),
//     gamePhase,
//   };
//   saveGame(G, gameObj);
// };

export const joinGame = (clientData, onChange) => {
  G.get(clientData.currentLobbyKey).on((value, key, _msg, _ev) => {
    // console.log({ value });
    // console.log({ key });
    // console.log({ _msg });
    // console.log({ _ev });
    onChange(value);
  }, true);

  resetGame(clientData.currentLobbyKey);

  updateGame(clientData);
};

export const updateGame = (clientData) => {
  if (!clientData.playerId) return;

  let myData = {};
  myData[clientData.playerId + "_deviceId"] = clientData.deviceId;
  myData[clientData.playerId + "_userName"] = clientData.userName;
  myData[clientData.playerId + "_clientScene"] = clientData.clientScene;
  myData[clientData.playerId + "_cursorX"] = clientData.cursor.x;
  myData[clientData.playerId + "_cursorY"] = clientData.cursor.y;
  myData[clientData.playerId + "_cursorHide"] = clientData.cursor.hide;
  myData[clientData.playerId + "_cursorText"] = clientData.cursor.text;

  G.get(clientData.currentLobbyKey).put(myData, (ack) => {});
};

export const resetPlayerIdData = (clientData) => {
  let newData = {};
  newData[clientData.playerId + "_deviceId"] = null;
  newData[clientData.playerId + "_userName"] = null;
  newData[clientData.playerId + "_clientScene"] = null;
  newData[clientData.playerId + "_cursorX"] = null;
  newData[clientData.playerId + "_cursorY"] = null;
  newData[clientData.playerId + "_cursorHide"] = null;
  newData[clientData.playerId + "_cursorText"] = null;
  G.get(clientData.currentLobbyKey).put(newData, (ack) => {});
};

export const leaveGame = (key) => {
  G.get(key).off();
};
