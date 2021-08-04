import React, { useState, useCallback, useEffect } from "react";

import Background from "./scenes/background";
import Menu from "./scenes/menu";
import Pregame from "./scenes/pregame";
import JoinPregame from "./scenes/joinPregame";
import CharacterSelection from "./scenes/characterSelection";

import { Cursor, CursorGhost } from "./components/cursor";
import ToastMessageContainer from "./components/toastMessage";

import { appVersion, CLIENT_SCENES, LSKEY } from "./logic/constants";
import { updateMyPlayer, leaveCampaign } from "./logic/campaign";
import { uuidv4 } from "./logic/utility";

import "./App.css";

const App = () => {
  // TOAST MESSAGES ##########################################

  const [toastMessages, setToastMessages] = useState([]);

  const deleteToastMessage = useCallback((id) => {
    setToastMessages((prev) =>
      prev.filter((toastMessage) => toastMessage.id !== id)
    );
  }, []);

  const addToastMessage = useCallback(
    (type, text) => {
      let id = uuidv4();

      setToastMessages((prev) => [...prev, { id, type, text }]);

      setTimeout(() => deleteToastMessage(id), 3000);
    },
    [deleteToastMessage]
  );

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
      campaignKey: null,
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

  const softResetClientData = useCallback(() => {
    setClientData((prev) => ({
      ...prev,
      clientScene: CLIENT_SCENES.MENU,
      campaignKey: null,
      playerId: null,
    }));
  }, []);

  const changeClientScene = useCallback((newScene) => {
    setClientData((prev) => ({ ...prev, clientScene: newScene }));
  }, []);

  const changeUserName = useCallback((newUserName) => {
    setClientData((prev) => ({ ...prev, userName: newUserName }));
  }, []);

  const changeCampaignKey = useCallback((newCampaignKey) => {
    setClientData((prev) => ({ ...prev, campaignKey: newCampaignKey }));
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

  const leaveCampaignApp = useCallback(() => {
    leaveCampaign(
      clientData.campaignKey,
      clientData.deviceId,
      clientData.playerId
    );
    softResetClientData();
    setGameData(null);
  }, [
    clientData.campaignKey,
    clientData.deviceId,
    clientData.playerId,
    softResetClientData,
  ]);

  const mergeGameData = useCallback(
    (newValue) => {
      if (newValue?.deleted === true) {
        leaveCampaignApp();
        return;
      }
      setGameData((prev) => ({
        ...prev,
        ...newValue,
      }));
    },
    [leaveCampaignApp]
  );

  // VIEWPORT ##########################################

  const [viewport, setViewport] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = useCallback(
    () => setViewport({ height: window.innerHeight, width: window.innerWidth }),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // EFFETTI ##########################################

  // useEffect(() => {
  //   console.log("gameData changed: ", { ...gameData });
  // }, [gameData]);

  return (
    <>
      <Background />
      {CLIENT_SCENES.MENU === clientData.clientScene && (
        <Menu
          clientData={clientData}
          changeUserName={changeUserName}
          changeCampaignKey={changeCampaignKey}
          changeClientScene={changeClientScene}
          softResetClientData={softResetClientData}
          mergeGameData={mergeGameData}
          addToastMessage={addToastMessage}
        />
      )}
      {CLIENT_SCENES.LOBBY_PREGAME === clientData.clientScene && (
        <Pregame
          clientData={clientData}
          gameData={gameData}
          changePlayerId={changePlayerId}
          changeClientScene={changeClientScene}
          addToastMessage={addToastMessage}
        />
      )}
      {CLIENT_SCENES.JOIN_LOBBY_PREGAME === clientData.clientScene && (
        <JoinPregame
          clientData={clientData}
          changeCampaignKey={changeCampaignKey}
          changeClientScene={changeClientScene}
          mergeGameData={mergeGameData}
          addToastMessage={addToastMessage}
        />
      )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene && (
        <CharacterSelection changeClientScene={changeClientScene} />
      )}

      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerBlue" && (
          <CursorGhost
            playerId="playerBlue"
            gameData={gameData}
            viewport={viewport}
          />
        )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerRed" && (
          <CursorGhost
            playerId="playerRed"
            gameData={gameData}
            viewport={viewport}
          />
        )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerGreen" && (
          <CursorGhost
            playerId="playerGreen"
            gameData={gameData}
            viewport={viewport}
          />
        )}
      {CLIENT_SCENES.CHARACTER_SELECTION === clientData.clientScene &&
        clientData.playerId !== "playerYellow" && (
          <CursorGhost
            playerId="playerYellow"
            gameData={gameData}
            viewport={viewport}
          />
        )}

      <ToastMessageContainer messages={toastMessages} />

      {clientData.cursor && (
        <Cursor
          playerId={clientData.playerId}
          cursorData={clientData.cursor}
          changeCursorX={changeCursorX}
          changeCursorY={changeCursorY}
          changeCursorUp={changeCursorUp}
          changeCursorDown={changeCursorDown}
          changeCursorHide={changeCursorHide}
          viewport={viewport}
        />
      )}
    </>
  );
};

export default App;
