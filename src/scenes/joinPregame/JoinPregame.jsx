import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

import { CLIENT_SCENES, LSKEY } from "../../logic/constants";
import { joinGame } from "../../logic/database";

import "./joinPregame.css";

const JoinPregame = ({
  clientData,
  changeCurrentLobbyKey,
  changeClientScene,
  mergeGameData,
  addToastMessage,
}) => {
  const [lobbyCode, setLobbyCode] = useState("");

  const onJoinCampaign = useCallback(() => {
    joinGame(lobbyCode, clientData, mergeGameData, addToastMessage, () => {
      changeCurrentLobbyKey(lobbyCode);
      changeClientScene(CLIENT_SCENES.LOBBY_PREGAME);
    });
  }, [lobbyCode, clientData, mergeGameData]);

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
  clientData: PropTypes.object.isRequired,
  changeCurrentLobbyKey: PropTypes.func.isRequired,
  changeClientScene: PropTypes.func.isRequired,
  mergeGameData: PropTypes.func.isRequired,
  addToastMessage: PropTypes.func.isRequired,
};

JoinPregame.defaultProps = {};

export default JoinPregame;
