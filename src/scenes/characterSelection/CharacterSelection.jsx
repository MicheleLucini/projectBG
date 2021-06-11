import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import { CLIENT_SCENES } from "../../logic/constants";

import "./characterSelection.css";

const CharacterSelection = ({ changeClientScene }) => {
  return (
    <div id="character_selection">
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

CharacterSelection.propTypes = {
  changeClientScene: PropTypes.func.isRequired,
};

CharacterSelection.defaultProps = {};

export default CharacterSelection;
