import React, { useState, useCallback } from "react";
import Background from "./scenes/background";
import Menu from "./scenes/menu";
import Pregame from "./scenes/pregame";
import { GAME_PHASES, LSKEY } from "./logic/constants";
import "./App.css";

const App = () => {
  const [gamePhase, setGamePhase] = useState(
    localStorage.getItem(LSKEY.GAME_PHASE)
  );

  const changePhase = useCallback(
    (newPhase) => {
      localStorage.setItem(LSKEY.GAME_PHASE, newPhase);
      setGamePhase(newPhase);
    },
    [setGamePhase]
  );

  return (
    <>
      <Background gamePhase={gamePhase}></Background>
      {!gamePhase && <Menu changePhase={changePhase}></Menu>}
      {gamePhase === GAME_PHASES.LOBBY_PREGAME && (
        <Pregame changePhase={changePhase}></Pregame>
      )}
    </>
  );
};

export default App;
