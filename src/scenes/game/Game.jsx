import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import Deck from "../../components/deck";
import { CLIENT_SCENES } from "../../logic/constants";
import { getNewShuffledDeck } from "../../logic/utility";

import "./game.css";

const Game = ({ changeClientScene }) => {
  const [deckCards, setDeckCards] = useState([]);

  useEffect(() => {
    setDeckCards(getNewShuffledDeck());
  }, []);

  return (
    <div id="game">
      <Deck deckCards={deckCards}></Deck>
      <Button
        id="back_btn"
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
