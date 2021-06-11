import React, { useState, useCallback, useEffect } from "react";

import Background from "./scenes/background";
import Menu from "./scenes/menu";
import Pregame from "./scenes/pregame";
import JoinPregame from "./scenes/joinPregame";

import Cursor from "./components/cursor";

import { appVersion, CLIENT_SCENES, LSKEY } from "./logic/constants";
import {
  joinGame,
  updateGame,
  leaveGame,
  resetPlayerIdData,
} from "./logic/database";
import { uuidv4, getRandomGameKey } from "./logic/utility";

import "./App.css";

const App = () => {
  // CLIENT DATA

  const [clientData, setClientData] = useState(() => {
    const lsValue = localStorage.getItem(LSKEY.CLIENT_DATA);
    if (lsValue !== null && lsValue.appVersion === appVersion)
      return JSON.parse(lsValue);
    const defaultValues = {
      appVersion: appVersion,
      deviceId: uuidv4(),
      clientScene: CLIENT_SCENES.MENU,
      userName: "",
      currentLobbyKey: getRandomGameKey(),
      playerId: null,
      cursor: {
        x: 0,
        y: 0,
        mouseUp: false,
        mouseDown: false,
        hide: true,
        text: "",
      },
    };
    localStorage.setItem(LSKEY.CLIENT_DATA, JSON.stringify(defaultValues));
    return defaultValues;
  });

  useEffect(() => {
    // console.log("saving: ", { ...clientData });
    updateGame(clientData);
    localStorage.setItem(LSKEY.CLIENT_DATA, JSON.stringify(clientData));
  }, [clientData]);

  const changeClientScene = useCallback((newScene) => {
    setClientData((prev) => ({ ...prev, clientScene: newScene }));
  }, []);

  const changeUserName = useCallback((newUserName) => {
    setClientData((prev) => ({ ...prev, userName: newUserName }));
  }, []);

  const changeCurrentLobbyKey = useCallback((newCurrentLobbyKey) => {
    setClientData((prev) => {
      leaveGame(prev.currentLobbyKey);
      return { ...prev, currentLobbyKey: newCurrentLobbyKey };
    });
  }, []);

  const changePlayerId = useCallback((newPlayerId) => {
    setClientData((prev) => {
      resetPlayerIdData(prev);
      return { ...prev, playerId: newPlayerId };
    });
  }, []);

  // CLIENT DATA CURSOR

  const changeCursorX = useCallback((newValue) => {
    setClientData((prev) => ({
      ...prev,
      cursor: { ...prev.cursor, x: newValue, hide: false },
    }));
  }, []);
  const changeCursorY = useCallback((newValue) => {
    setClientData((prev) => ({
      ...prev,
      cursor: { ...prev.cursor, y: newValue, hide: false },
    }));
  }, []);
  const changeCursorUp = useCallback((newValue) => {
    setClientData((prev) => ({
      ...prev,
      cursor: { ...prev.cursor, mouseUp: newValue },
    }));
  }, []);
  const changeCursorDown = useCallback((newValue) => {
    setClientData((prev) => ({
      ...prev,
      cursor: { ...prev.cursor, mouseDown: newValue },
    }));
  }, []);
  const changeCursorHide = useCallback((newValue) => {
    setClientData((prev) => ({
      ...prev,
      cursor: { ...prev.cursor, hide: newValue },
    }));
  }, []);

  // GAME DATA

  const [gameData, setGameData] = useState(null);

  const mergeGameData = useCallback((newValue) => {
    setGameData((prev) => ({
      ...prev,
      ...newValue,
    }));
  }, []);

  useEffect(() => {
    if (
      clientData.currentLobbyKey !== null &&
      clientData.currentLobbyKey !== ""
    )
      joinGame(clientData, mergeGameData);
  }, [clientData.currentLobbyKey]);

  useEffect(() => {
    console.log("gameData changed: ", { ...gameData });
  }, [gameData]);

  return (
    <>
      <Background />
      {CLIENT_SCENES.MENU === clientData.clientScene && (
        <Menu
          userName={clientData.userName}
          changeUserName={changeUserName}
          changeClientScene={changeClientScene}
        />
      )}
      {CLIENT_SCENES.LOBBY_PREGAME === clientData.clientScene && (
        <Pregame
          clientData={clientData}
          gameData={gameData}
          changePlayerId={changePlayerId}
          changeClientScene={changeClientScene}
        />
      )}
      {CLIENT_SCENES.JOIN_LOBBY_PREGAME === clientData.clientScene && (
        <JoinPregame
          changeCurrentLobbyKey={changeCurrentLobbyKey}
          changeClientScene={changeClientScene}
        />
      )}
      {clientData.cursor && (
        <Cursor
          cursorData={clientData.cursor}
          changeCursorX={changeCursorX}
          changeCursorY={changeCursorY}
          changeCursorUp={changeCursorUp}
          changeCursorDown={changeCursorDown}
          changeCursorHide={changeCursorHide}
        ></Cursor>
      )}
    </>
  );
};

export default App;
