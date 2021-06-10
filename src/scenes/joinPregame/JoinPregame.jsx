import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import TextInput from "../../components/textInput";
import { GAME_PHASES, LSKEY } from "../../logic/constants";
import { joinGame } from "../../logic/database";

import "./joinPregame.css";

const JoinPregame = ({ changeCurrentLobbyKey, changeClientScene }) => {
  const [lobbyCode, setLobbyCode] = useState("");

  const onJoinCampaign = useCallback(() => {
    changeCurrentLobbyKey(lobbyCode);
    changeClientScene(GAME_PHASES.LOBBY_PREGAME)
  }, [lobbyCode]);

  const customSetLobbyCode = useCallback((value) => {
    setLobbyCode(value.toUpperCase());
  }, []);

  return (
    <div id="join_pregame">
      <TextInput
        label="Lobby code"
        value={lobbyCode}
        setValue={customSetLobbyCode}
      />
      <Button
        text="Back"
        icon="arrow_back"
        onClick={() => changeClientScene(GAME_PHASES.MENU)}
      ></Button>
      <Button
        text="Join campaign"
        icon="login"
        onClick={onJoinCampaign}
        disabled={lobbyCode.length !== 4}
      ></Button>
    </div>
  );
};

JoinPregame.propTypes = {
  changeClientScene: PropTypes.func.isRequired,
};

JoinPregame.defaultProps = {};

export default JoinPregame;
