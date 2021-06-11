import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import PlayerSlot from "./PlayerSlot";
import { CLIENT_SCENES } from "../../logic/constants";

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
      <PlayerSlot
        color="blue"
        playerId="playerBlue"
        userName={gameData?.playerBlue_userName}
        itsAMe={gameData?.playerBlue_deviceId === clientData.deviceId}
        changePlayerId={changePlayerId}
      />
      <PlayerSlot
        color="red"
        playerId="playerRed"
        userName={gameData?.playerRed_userName}
        itsAMe={gameData?.playerRed_deviceId === clientData.deviceId}
        changePlayerId={changePlayerId}
      />
      <PlayerSlot
        color="green"
        playerId="playerGreen"
        userName={gameData?.playerGreen_userName}
        itsAMe={gameData?.playerGreen_deviceId === clientData.deviceId}
        changePlayerId={changePlayerId}
      />
      <PlayerSlot
        color="yellow"
        playerId="playerYellow"
        userName={gameData?.playerYellow_userName}
        itsAMe={gameData?.playerYellow_deviceId === clientData.deviceId}
        changePlayerId={changePlayerId}
      />
      <Button
        text="Back"
        icon="arrow_back"
        onClick={() => changeClientScene(CLIENT_SCENES.MENU)}
      ></Button>
      <Button
        text="Start"
        icon="play_arrow"
        onClick={() => changeClientScene(CLIENT_SCENES.CHARACTER_SELECTION)}
      ></Button>
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
