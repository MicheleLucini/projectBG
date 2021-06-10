import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import { GAME_PHASES } from "../../logic/constants";

import "./pregame.css";

const Pregame = ({
  clientData,
  gameData,
  changePlayerId,
  changeClientScene,
}) => {
  return (
    <div id="pregame">
      <div className="lobby-key">
        Lobby code:
        <span className="selectable">{clientData.currentLobbyKey}</span>
      </div>
      <div className="player blue" onClick={() => changePlayerId("playerBlue")}>
        <span className="icon material-icons-outlined">
          {gameData?.playerBlue_userName ? "face" : "smart_toy"}
        </span>
        <span>{gameData?.playerBlue_userName || "Empty"}</span>
      </div>
      <div className="player red" onClick={() => changePlayerId("playerRed")}>
        <span className="icon material-icons-outlined">
          {gameData?.playerRed_userName ? "face" : "smart_toy"}
        </span>
        <span>{gameData?.playerRed_userName || "Empty"}</span>
      </div>
      <div
        className="player green"
        onClick={() => changePlayerId("playerGreen")}
      >
        <span className="icon material-icons-outlined">
          {gameData?.playerGreen_userName ? "face" : "smart_toy"}
        </span>
        <span>{gameData?.playerGreen_userName || "Empty"}</span>
      </div>
      <div
        className="player yellow"
        onClick={() => changePlayerId("playerYellow")}
      >
        <span className="icon material-icons-outlined">
          {gameData?.playerYellow_userName ? "face" : "smart_toy"}
        </span>
        <span>{gameData?.playerYellow_userName || "Empty"}</span>
      </div>
      <Button
        text="Back"
        icon="arrow_back"
        onClick={() => changeClientScene(GAME_PHASES.MENU)}
      ></Button>
      <Button text="Start" icon="play_arrow" onClick={() => {}}></Button>
    </div>
  );
};

Pregame.propTypes = {
  clientData: PropTypes.object.isRequired,
  gameData: PropTypes.object.isRequired,
  changePlayerId: PropTypes.func.isRequired,
  changeClientScene: PropTypes.func.isRequired,
};

Pregame.defaultProps = {};

export default Pregame;
