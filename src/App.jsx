import React, { useState, useCallback, useEffect } from "react";

import Background from "./scenes/background";
import Menu from "./scenes/menu";
import Pregame from "./scenes/pregame";
import JoinPregame from "./scenes/joinPregame";
import CharacterSelection from "./scenes/characterSelection";

import { Cursor, CursorGhost } from "./components/cursor";

import { appVersion, CLIENT_SCENES, LSKEY } from "./logic/constants";
import { updateMyPlayer } from "./logic/database";
import { uuidv4 } from "./logic/utility";

import "./App.css";

const App = () => {
  // CLIENT DATA ##########################################

  const [clientData, setClientData] = useState(() => {
    const lsValue = JSON.parse(localStorage.getItem(LSKEY.CLIENT_DATA));

    // Se ho i dati e la versione è uguale uso quelli pulendo solo la scene corrente
    if (lsValue?.appVersion === appVersion) {
      return { ...lsValue, clientScene: CLIENT_SCENES.MENU };
    }

    const defaultValues = {
      appVersion: appVersion,
      deviceId: uuidv4(),
      clientScene: CLIENT_SCENES.MENU,
      userName: "",
      currentLobbyKey: null,
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

    // Se ho i dati, la versione è diversa e ho il vecchio device id pulisco tutto mantenendo quello e lo user name
    if (lsValue && lsValue.appVersion !== appVersion && !!lsValue.deviceId) {
      return {
        ...defaultValues,
        deviceId: lsValue.deviceId,
        userName: lsValue.userName,
      };
    }

    return defaultValues;
  });

  useEffect(() => {
    updateMyPlayer(clientData);
    localStorage.setItem(LSKEY.CLIENT_DATA, JSON.stringify(clientData));
  }, [clientData]);

  const changeClientScene = useCallback((newScene) => {
    setClientData((prev) => ({ ...prev, clientScene: newScene }));
  }, []);

  const changeUserName = useCallback((newUserName) => {
    setClientData((prev) => ({ ...prev, userName: newUserName }));
  }, []);

  const changeCurrentLobbyKey = useCallback((newCurrentLobbyKey) => {
    setClientData((prev) => ({ ...prev, currentLobbyKey: newCurrentLobbyKey }));
  }, []);

  const changePlayerId = useCallback((newPlayerId) => {
    setClientData((prev) => ({ ...prev, playerId: newPlayerId }));
  }, []);

  // CLIENT DATA CURSOR ##########################################

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

  // GAME DATA ##########################################

  const [gameData, setGameData] = useState(null);

  const mergeGameData = useCallback((newValue) => {
    setGameData((prev) => ({
      ...prev,
      ...newValue,
    }));
  }, []);

  const resetGameData = useCallback(() => {
    setGameData(null);
  }, []);

  // EFFETTI ##########################################

  useEffect(() => {
    console.log("gameData changed: ", { ...gameData });
  }, [gameData]);

  return (
    <>
      <Background />
      {CLIENT_SCENES.MENU === clientData.clientScene && (
        <Menu
          clientData={clientData}
          changeUserName={changeUserName}
          changeCurrentLobbyKey={changeCurrentLobbyKey}
          changeClientScene={changeClientScene}
          mergeGameData={mergeGameData}
          resetGameData={resetGameData}
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
          clientData={clientData}
          changeCurrentLobbyKey={changeCurrentLobbyKey}
          changeClientScene={changeClientScene}
          mergeGameData={mergeGameData}
        />
      )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene && (
        <CharacterSelection changeClientScene={changeClientScene} />
      )}

      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerBlue" && (
          <CursorGhost playerId="playerBlue" gameData={gameData} />
        )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerRed" && (
          <CursorGhost playerId="playerRed" gameData={gameData} />
        )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerGreen" && (
          <CursorGhost playerId="playerGreen" gameData={gameData} />
        )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerYellow" && (
          <CursorGhost playerId="playerYellow" gameData={gameData} />
        )}
      {clientData.cursor && (
        <Cursor
          playerId={clientData.playerId}
          cursorData={clientData.cursor}
          changeCursorX={changeCursorX}
          changeCursorY={changeCursorY}
          changeCursorUp={changeCursorUp}
          changeCursorDown={changeCursorDown}
          changeCursorHide={changeCursorHide}
        />
      )}
    </>
  );
};

export default App;
