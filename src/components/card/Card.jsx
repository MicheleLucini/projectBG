import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import Suit from "../suit";

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
          "card__face card__face--front card_suit_color_" + cardColorSuit
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
      <div
        className={
          "card__face card__face--back card__back_color_" + card.deckColor
        }
      >
        <div className="pattern">
          <div className="logo">
            <svg
              width="813"
              height="337"
              viewBox="0 0 813 337"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.977607 335.465C-0.722394 333.365 -0.0223934 132.765 1.67761 124.365C5.97761 104.065 7.67761 98.4649 13.2776 85.0649C16.3776 77.6649 25.5776 62.3649 31.3776 54.8649C33.7776 51.8649 39.4776 45.765 44.0776 41.265C65.5776 20.265 84.3776 10.365 118.378 1.76495C126.678 -0.33505 159.778 -0.63505 169.878 1.26495C178.878 3.06495 186.878 5.16495 193.178 7.46495C202.278 10.865 205.678 12.165 209.878 14.165C215.578 16.765 235.778 29.965 238.278 32.765C239.378 33.865 241.078 34.865 242.178 34.865C243.278 34.865 247.978 32.065 252.778 28.565C257.478 25.165 262.778 21.365 264.378 20.265C268.078 17.765 283.478 10.365 286.878 9.36495C288.278 9.06495 290.978 8.16495 292.878 7.46495C296.478 6.06495 303.678 3.96495 312.378 1.76495C320.678 -0.33505 353.778 -0.63505 363.878 1.26495C394.978 7.26495 418.978 19.465 440.678 40.265C454.478 53.465 465.578 69.5649 472.778 86.8649C478.178 99.9649 479.278 103.065 480.878 109.365C484.578 124.965 484.778 130.865 484.878 234.465C484.878 325.865 484.678 335.665 483.278 336.265C481.278 337.065 392.478 337.065 390.478 336.265C389.078 335.665 388.878 326.265 388.878 239.465C388.878 181.065 388.478 140.665 387.878 136.465C385.278 118.865 371.778 103.365 353.878 97.3649C346.878 95.0649 332.178 95.0649 325.578 97.2649C310.178 102.665 299.078 113.565 293.478 128.765C291.378 134.265 291.378 136.465 290.878 235.365L290.378 336.365H242.878H195.378L194.878 235.365C194.378 145.165 194.178 133.865 192.678 129.765C187.878 116.365 179.678 106.865 167.478 100.765C147.478 90.8649 127.178 94.365 111.278 110.265C103.778 117.865 99.9776 124.565 97.9776 133.665C97.1776 137.365 96.8776 167.665 96.8776 236.665C96.8776 311.365 96.5776 334.765 95.6776 335.665C93.7776 337.565 2.57761 337.365 0.977607 335.465Z"
                fill="black"
              ></path>
              <path
                d="M523.178 1.22894C521.678 2.72894 522.378 176.929 523.978 190.129C531.978 256.829 580.978 312.929 647.878 331.829C650.878 332.729 655.378 333.729 657.878 334.129C660.378 334.529 664.878 335.429 667.878 336.029C671.678 336.829 694.578 337.029 742.878 336.929L812.378 336.629L812.678 290.229C812.778 264.629 812.578 243.429 812.078 242.929C811.678 242.529 781.678 242.029 745.378 241.829C671.078 241.529 675.478 241.929 658.378 233.329C641.778 224.929 629.578 210.629 622.078 190.629C619.178 182.829 618.878 173.729 618.878 89.1289C618.878 23.1289 618.578 2.22894 617.678 1.32894C616.078 -0.271062 524.778 -0.371062 523.178 1.22894Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
      </div>
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
