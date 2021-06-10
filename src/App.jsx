import React, { useState, useCallback, useEffect } from "react";

import Background from "./scenes/background";
import Menu from "./scenes/menu";
import Pregame from "./scenes/pregame";
import JoinPregame from "./scenes/joinPregame";
import RegionRoulette from "./scenes/regionRoulette";

import Cursor from "./components/cursor";

import { GAME_PHASES, LSKEY } from "./logic/constants";
import { initGun } from "./logic/database";
import { uuidv4, getRandomGameKey } from "./logic/utility";

import "./App.css";

const App = () => {
  const [clientData, setClientData] = useState(() => {
    const lsValue = localStorage.getItem(LSKEY.CLIENT_DATA);
    if (lsValue !== null) return JSON.parse(lsValue);
    const defaultValues = {
      deviceId: uuidv4(),
      clientScene: GAME_PHASES.MENU,
      userName: "",
      currentLobbyKey: getRandomGameKey(),
    };
    localStorage.setItem(LSKEY.CLIENT_DATA, JSON.stringify(defaultValues));
    return defaultValues;
  });

  useEffect(() => {
    console.log("saving: ", { ...clientData });
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

  // const [gameData, setGameData] = useState(
  //   JSON.parse(localStorage.getItem(LSKEY.GAME_DATA))
  // );
  // const gun = initGun();

  // const changeGameData = useCallback((newGameData) => {
  //   console.log({ newGameData });
  //   localStorage.setItem(LSKEY.GAME_DATA, JSON.stringify(newGameData));
  //   setGameData(newGameData);
  // }, []);

  // useEffect(() => {
  //   // window.gun = gun;
  //   // console.log({ gun });
  //   if (deviceId === null) {
  //     const newUUID = ;
  //     localStorage.setItem(LSKEY.DEVICE_ID, newUUID);
  //     setDeviceId(newUUID);
  //   }
  // }, []);

  return (
    <>
      <Background />
      {GAME_PHASES.MENU === clientData.clientScene && (
        <Menu
          userName={clientData.userName}
          changeUserName={changeUserName}
          changeClientScene={changeClientScene}
        />
      )}
      {GAME_PHASES.LOBBY_PREGAME === clientData.clientScene && (
        <Pregame
          clientData={clientData}
          changeClientScene={changeClientScene}
        />
      )}
      {GAME_PHASES.JOIN_LOBBY_PREGAME === clientData.clientScene && (
        <JoinPregame
          changeCurrentLobbyKey={changeCurrentLobbyKey}
          changeClientScene={changeClientScene}
        />
      )}
      {GAME_PHASES.REGION_ROULETTE === clientData.clientScene && (
        <RegionRoulette changeClientScene={changeClientScene} />
      )}
      <Cursor></Cursor>
    </>
  );
};

export default App;
