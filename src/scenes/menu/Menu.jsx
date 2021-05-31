import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import { GAME_PHASES } from "../../logic/constants";

import "./menu.css";

const Menu = ({ changePhase }) => {
  return (
    <div id="menu">
      <Button
        text="Start campaign"
        icon="play_arrow"
        onClick={() => changePhase(GAME_PHASES.LOBBY_PREGAME)}
      ></Button>
    </div>
  );
};

Menu.propTypes = {
  changePhase: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
