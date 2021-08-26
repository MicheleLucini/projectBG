import React, { useMemo } from "react";
import PropTypes from "prop-types";

import "./deck.css";

function zth(max, prcntg, intero) {
  var x = (max * prcntg) / 100;
  if (intero) return String(Math.round(x)).padStart(2, "0");
  return Math.round(x * 10) / 10;
}

const Deck = ({ deckCards }) => {
  const deckLengthPercentage = useMemo(
    () => (deckCards.length * 100) / 108,
    [deckCards.length]
  );

  const deckShadow = useMemo(() => {
    return (
      "0 " + zth(20, deckLengthPercentage) + "px 0 #ccc," +
      "0 " + zth(20, deckLengthPercentage) + "px " + zth(40, deckLengthPercentage) + "px rgba(0,0,0,0." + zth(19, deckLengthPercentage, true) + ")," +
      "0 " + zth(22, deckLengthPercentage) + "px " + zth(16, deckLengthPercentage) + "px rgba(0,0,0,0." + zth(30, deckLengthPercentage, true) + ")"
    );
  }, [deckLengthPercentage]);

  return <div id="deck" style={{ boxShadow: deckShadow }}></div>;
};

Deck.propTypes = {
  deckCards: PropTypes.array.isRequired,
};

Deck.defaultProps = {};

export default Deck;
