import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { getColorFromPlayerId } from "../../logic/utility";
import Card from "../card";

import "./hand.css";

const Hand = ({ playerId, clientData, gameData }) => {
  const isMyHand = useMemo(
    () => playerId === clientData.playerId,
    [playerId, clientData.playerId]
  );

  const handCards = useMemo(() => {
    return gameData[playerId + "_hand"]
      ? JSON.parse(gameData[playerId + "_hand"])
      : [];
  }, [gameData[playerId + "_hand"]]);

  const handClass = useMemo(
    () => ["hand", getColorFromPlayerId(playerId)].filter((x) => !!x).join(" "),
    [playerId]
  );

  return (
    <div id={playerId + "Hand"} className={handClass}>
      <div className="wrapper">
        {handCards?.map((card, i) => (
          <Card card={card} isFlipped={isMyHand} />
        ))}
      </div>
    </div>
  );
};

Hand.propTypes = {
  playerId: PropTypes.string.isRequired,
  clientData: PropTypes.object.isRequired,
  gameData: PropTypes.object.isRequired,
};

Hand.defaultProps = {};

export default Hand;
