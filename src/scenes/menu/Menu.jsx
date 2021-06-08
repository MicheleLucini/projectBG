import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import TextInput from "../../components/textInput";
import { GAME_PHASES } from "../../logic/constants";

import "./menu.css";

const Menu = ({ changePhase }) => {
  const [name, setName] = useState("");

  return (
    <div id="menu">
      <TextInput label="Name" value={name} setValue={setName} />
      <Button
        text="Start campaign"
        icon="play_arrow"
        onClick={() => changePhase(GAME_PHASES.LOBBY_PREGAME)}
        disabled={name.length === 0}
      ></Button>
    </div>
  );
};

Menu.propTypes = {
  changePhase: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
