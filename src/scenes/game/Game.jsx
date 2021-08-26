import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import { CLIENT_SCENES } from "../../logic/constants";

import "./game.css";

const Game = ({ changeClientScene }) => {
  return (
    <div id="game">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Button
        text="Back"
        icon="arrow_back"
        onClick={() => changeClientScene(CLIENT_SCENES.LOBBY_PREGAME)}
      />
    </div>
  );
};

Game.propTypes = {
  changeClientScene: PropTypes.func.isRequired,
};

Game.defaultProps = {};

export default Game;
