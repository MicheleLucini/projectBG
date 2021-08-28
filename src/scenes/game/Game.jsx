import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import Deck from "../../components/deck";
import { shuffleDeck } from "../../logic/campaign";

import "./game.css";

const Game = ({ clientData, gameData, leaveCampaignApp }) => {
  const onLeaveCampaign = useCallback(() => {
    leaveCampaignApp();
  }, [leaveCampaignApp]);

  useEffect(() => {
    shuffleDeck(clientData, gameData);
  }, []);

  return (
    <div id="game">
      <Deck gameData={gameData}></Deck>
      <Button
        id="leave_btn"
        // text="Leave"
        icon="close"
        onClick={onLeaveCampaign}
      />
    </div>
  );
};

Game.propTypes = {
  clientData: PropTypes.object.isRequired,
  gameData: PropTypes.object.isRequired,
  leaveCampaignApp: PropTypes.func.isRequired,
};

Game.defaultProps = {};

export default Game;
