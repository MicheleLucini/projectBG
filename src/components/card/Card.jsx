import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import Suit from "../suit";
import CardBackFace from "../cardBackFace";

import { getColorFromSuit, getInfoFromCardRank } from "../../logic/utility";
import { CARD_RANK } from "../../logic/constants";

import "./card.css";

const Card = ({ card, isFlipped }) => {
  const isAJolly = useMemo(() => card.rank === CARD_RANK.JOKER, [card.rank]);
  const isAFigure = useMemo(() => card.rank > CARD_RANK.TEN, [card.rank]);
  const cardColorSuit = useMemo(() => getColorFromSuit(card.suit), [card.suit]);
  const cardRankInfo = useMemo(
    () => getInfoFromCardRank(card.rank),
    [card.rank]
  );
  const cardSuit = useMemo(() => <Suit type={card.suit} />, [card.suit]);

  const cardClass = useMemo(
    () =>
      ["card", isFlipped ? "is-flipped" : null].filter((x) => !!x).join(" "),
    [isFlipped]
  );

  const onClick = useCallback(() => {}, []);
  return (
    <div id={card.id} key={card.id} className={cardClass} onClick={onClick}>
      <div
        className={
          "card_front_face card_suit_color_" + cardColorSuit
        }
      >
        <div className={"info" + (isAJolly ? " jolly" : "")}>
          {cardRankInfo}
          {cardSuit}
        </div>
        <div className="figure">{isAFigure && <div></div>}</div>
        <div className={"info" + (isAJolly ? " jolly" : "")}>
          {cardRankInfo}
          {cardSuit}
        </div>
      </div>

      <CardBackFace deckColor={card.deckColor}></CardBackFace>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  isFlipped: PropTypes.bool,
};

Card.defaultProps = {
  isFlipped: false,
};

export default Card;
