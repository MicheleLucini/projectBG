import React from "react";
import PropTypes from "prop-types";

import { CARD_SUIT } from "../../logic/constants";

import "./suit.css";

const Suit = ({ type }) => {
  return (
    <>
      {type === CARD_SUIT.DIAMOND && (
        <div className="diamond">
          <div className="square"></div>
        </div>
      )}
      {type === CARD_SUIT.SPADE && (
        <div className="spade">
          <div className="square"></div>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="tail"></div>
        </div>
      )}
      {type === CARD_SUIT.HEART && (
        <div className="heart">
          <div className="square"></div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      )}
      {type === CARD_SUIT.CLUB && (
        <div className="club">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="tail"></div>
        </div>
      )}
    </>
  );
};

Suit.propTypes = {
  type: PropTypes.string.isRequired,
};

Suit.defaultProps = {};

export default Suit;
