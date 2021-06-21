import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

import { CLIENT_SCENES, appVersion } from "../../logic/constants";
import {
  createCampaign,
  joinCampaign,
  leaveCampaign,
} from "../../logic/campaign";

import "./menu.css";

const Menu = ({
  clientData,
  changeUserName,
  changeCampaignKey,
  changeClientScene,
  softResetClientData,

  mergeGameData,

  addToastMessage,
}) => {
  const [name, setName] = useState(clientData.userName);

  const onCreateCampaign = useCallback(async () => {
    changeUserName(name);

    const newGame = await createCampaign(clientData);

    await joinCampaign({
      key: newGame.key,
      clientData,
      onCampaignChange: mergeGameData,
    });

    changeCampaignKey(newGame.key);

    changeClientScene(CLIENT_SCENES.LOBBY_PREGAME);
  }, [
    changeUserName,
    name,
    clientData,
    addToastMessage,
    mergeGameData,
    changeCampaignKey,
    changeClientScene,
  ]);

  const onJoinCampaign = useCallback(() => {
    changeUserName(name);
    changeClientScene(CLIENT_SCENES.JOIN_LOBBY_PREGAME);
  }, [changeUserName, name, changeClientScene]);

  const onContinueCampaign = useCallback(async () => {
    changeUserName(name);

    const error = await joinCampaign({
      key: clientData.campaignKey,
      clientData,
      onCampaignChange: mergeGameData,
    });

    if (!error) {
      changeClientScene(CLIENT_SCENES.LOBBY_PREGAME);
    } else {
      addToastMessage(error);
    }
  }, [
    changeUserName,
    name,
    clientData,
    mergeGameData,
    changeClientScene,
    addToastMessage,
  ]);

  const onLeaveCampaign = useCallback(async () => {
    await leaveCampaign(
      clientData.campaignKey,
      clientData.deviceId,
      clientData.playerId
    );

    softResetClientData();
  }, [
    clientData.campaignKey,
    clientData.deviceId,
    clientData.playerId,
    softResetClientData,
  ]);

  return (
    <div id="menu">
      <TextInput label="Name" value={name} setValue={setName} />
      {clientData.campaignKey && (
        <>
          <Button
            text={"Continue campaign " + clientData.campaignKey}
            icon="navigate_next"
            onClick={onContinueCampaign}
          />
          <Button
            text={"Leave campaign " + clientData.campaignKey}
            icon="logout"
            onClick={onLeaveCampaign}
          />
        </>
      )}
      {!clientData.campaignKey && (
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
      <span className="version">{appVersion}</span>
    </div>
  );
};

Menu.propTypes = {
  clientData: PropTypes.object.isRequired,
  changeUserName: PropTypes.func.isRequired,
  changeCampaignKey: PropTypes.func.isRequired,
  changeClientScene: PropTypes.func.isRequired,
  softResetClientData: PropTypes.func.isRequired,

  mergeGameData: PropTypes.func.isRequired,

  addToastMessage: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
