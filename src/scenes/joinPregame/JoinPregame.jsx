import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import TextInput from "../../components/textInput";
import { CLIENT_SCENES, LSKEY } from "../../logic/constants";
import { joinGame } from "../../logic/database";

import "./joinPregame.css";

const JoinPregame = ({ changeCurrentLobbyKey, changeClientScene }) => {
  const [lobbyCode, setLobbyCode] = useState("");

  const onJoinCampaign = useCallback(() => {
    if (lobbyCode.length !== 4) return;
    changeCurrentLobbyKey(lobbyCode);
    changeClientScene(CLIENT_SCENES.LOBBY_PREGAME);
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
        onKeyPressEnter={onJoinCampaign}
      />
      <Button
        text="Back"
        icon="arrow_back"
        onClick={() => changeClientScene(CLIENT_SCENES.MENU)}
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
