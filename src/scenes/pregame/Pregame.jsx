import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import { GAME_PHASES } from "../../logic/constants";

import "./pregame.css";

const Pregame = ({ changePhase }) => {
  return (
    <div id="pregame">
      <div className="player blue">
        <span className="icon material-icons-round">face</span>
        <span>Player blue (you)</span>
      </div>
      <div className="player red">
        <span className="icon material-icons-outlined">smart_toy</span>
        <span>Player red (bot)</span>
      </div>
      <div className="player green">
        <span className="icon material-icons-outlined">smart_toy</span>
        <span>Player green (bot)</span>
      </div>
      <div className="player yellow">
        <span className="icon material-icons-outlined">smart_toy</span>
        <span>Player yellow (bot)</span>
      </div>
      <Button
        text={"Back"}
        icon="arrow_back"
        onClick={() => changePhase(GAME_PHASES.MENU)}
      ></Button>
      <Button
        text={"Start"}
        icon="play_arrow"
        onClick={() => changePhase(GAME_PHASES.LOBBY_PREGAME)}
      ></Button>
    </div>
  );
};

Pregame.propTypes = {
  changePhase: PropTypes.func.isRequired,
};

Pregame.defaultProps = {};

export default Pregame;
