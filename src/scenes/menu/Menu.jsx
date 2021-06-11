import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import TextInput from "../../components/textInput";
import { CLIENT_SCENES } from "../../logic/constants";

import "./menu.css";

const Menu = ({ userName, changeUserName, changeClientScene }) => {
  const [name, setName] = useState(userName);

  const onStartCampaign = useCallback(() => {
    changeUserName(name);
    changeClientScene(CLIENT_SCENES.LOBBY_PREGAME);
  }, [name]);

  const onJoinCampaign = useCallback(() => {
    changeUserName(name);
    changeClientScene(CLIENT_SCENES.JOIN_LOBBY_PREGAME);
  }, [name]);

  return (
    <div id="menu">
      <TextInput label="Name" value={name} setValue={setName} />
      <Button
        text="Create campaign"
        icon="add"
        onClick={onStartCampaign}
        disabled={name.length === 0}
      ></Button>
      <Button
        text="Join campaign"
        icon="login"
        onClick={onJoinCampaign}
        disabled={name.length === 0}
      ></Button>
    </div>
  );
};

Menu.propTypes = {
  userName: PropTypes.string.isRequired,
  changeUserName: PropTypes.func.isRequired,
  changeClientScene: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
