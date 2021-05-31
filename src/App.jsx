import React, { useState, useCallback } from "react";
import Background from "./scenes/background";
import Menu from "./scenes/menu";
import Pregame from "./scenes/pregame";
import RegionRoulette from "./scenes/regionRoulette";
import { GAME_PHASES, LSKEY } from "./logic/constants";
import "./App.css";

const App = () => {
  const [gamePhase, setGamePhase] = useState(
    localStorage.getItem(LSKEY.GAME_PHASE)
  );
  const [gameData, setGameData] = useState(
    JSON.parse(localStorage.getItem(LSKEY.GAME_DATA))
  );

  const changePhase = useCallback((newPhase) => {
    localStorage.setItem(LSKEY.GAME_PHASE, newPhase);
    setGamePhase(newPhase);
  }, []);

  const changeGameData = useCallback((newGameData) => {
    console.log({ newGameData });
    localStorage.setItem(LSKEY.GAME_DATA, JSON.stringify(newGameData));
    setGameData(newGameData);
  }, []);

  return (
    <>
      <Background gamePhase={gamePhase}></Background>
      {(gamePhase === null || gamePhase === GAME_PHASES.MENU) && (
        <Menu changePhase={changePhase} />
      )}
      {gamePhase === GAME_PHASES.LOBBY_PREGAME && (
        <Pregame changePhase={changePhase} changeGameData={changeGameData} />
      )}
      {gamePhase === GAME_PHASES.REGION_ROULETTE && (
        <RegionRoulette
          changePhase={changePhase}
          gameData={gameData}
          changeGameData={changeGameData}
        />
      )}
    </>
  );
};

export default App;
