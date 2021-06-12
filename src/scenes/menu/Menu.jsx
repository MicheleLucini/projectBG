import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

import { CLIENT_SCENES } from "../../logic/constants";
import { leaveGame, createGame, joinGame } from "../../logic/database";

import "./menu.css";

const Menu = ({
  clientData,
  changeUserName,
  changeCurrentLobbyKey,
  changeClientScene,
  mergeGameData,
}) => {
  const [name, setName] = useState(clientData.userName);

  const onCreateCampaign = useCallback(() => {
    changeUserName(name);
    const newGame = createGame(clientData);
    joinGame(newGame.key, clientData, mergeGameData, () => {
      changeCurrentLobbyKey(newGame.key);
      changeClientScene(CLIENT_SCENES.LOBBY_PREGAME);
    });
  }, [name, clientData, mergeGameData]);

  const onJoinCampaign = useCallback(() => {
    changeUserName(name);
    changeClientScene(CLIENT_SCENES.JOIN_LOBBY_PREGAME);
  }, [name]);

  const onContinueCampaign = useCallback(() => {
    changeUserName(name);
    joinGame(clientData.currentLobbyKey, clientData, mergeGameData, () => {
      changeClientScene(CLIENT_SCENES.LOBBY_PREGAME);
    });
  }, [name, clientData, mergeGameData]);

  const onLeaveCampaign = useCallback(() => {
    leaveGame(clientData.currentLobbyKey, clientData);
    changeCurrentLobbyKey(null);
  }, [clientData]);

  return (
    <div id="menu">
      <TextInput label="Name" value={name} setValue={setName} />
      {clientData.currentLobbyKey && (
        <>
          <Button
            text={"Continue campaign " + clientData.currentLobbyKey}
            icon="navigate_next"
            onClick={onContinueCampaign}
          />
          <Button
            text={"Leave campaign " + clientData.currentLobbyKey}
            icon="logout"
            onClick={onLeaveCampaign}
          />
        </>
      )}
      {!clientData.currentLobbyKey && (
        <>
          <Button
            text="Create campaign"
            icon="add"
            onClick={onCreateCampaign}
            disabled={name.length === 0}
          />
          <Button
            text="Join campaign"
            icon="login"
            onClick={onJoinCampaign}
            disabled={name.length === 0}
          />
        </>
      )}
    </div>
  );
};

Menu.propTypes = {
  clientData: PropTypes.object.isRequired,
  changeUserName: PropTypes.func.isRequired,
  changeCurrentLobbyKey: PropTypes.func.isRequired,
  changeClientScene: PropTypes.func.isRequired,
  mergeGameData: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
