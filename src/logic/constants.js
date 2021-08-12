import packageJson from "../../package.json";

export const appVersion = packageJson.version;

export const CLIENT_SCENES = {
  MENU: "menu",
  LOBBY_PREGAME: "lobby_pregame",
  JOIN_LOBBY_PREGAME: "join_lobby_pregame",
  CHARACTER_SELECTION: "character_selection",
};

export const LSKEY = {
  CLIENT_DATA: "client_data",
};
