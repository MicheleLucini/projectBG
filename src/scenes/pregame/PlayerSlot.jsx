import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import "./pregame.css";

const PlayerSlot = ({ color, playerId, userName, itsAMe, changePlayerId }) => {
  const cursorClass = useMemo(() => ["player", color], [color]);

  const spanText = useMemo(() => {
    if (!userName) return "Player " + color + " (bot)";
    if (itsAMe) return userName + " (you)";
    return userName;
  }, [userName, color, itsAMe]);

  const onClick = useCallback(() => {
    if (userName) return;
    changePlayerId(playerId);
  }, [userName, playerId]);

  return (
    <div className={"player " + color} onClick={onClick}>
      {userName ? (
        <span className="icon material-icons-round">face</span>
      ) : (
        <span className="icon material-icons-outlined">smart_toy</span>
      )}
      <span>{spanText}</span>
    </div>
  );
};

PlayerSlot.propTypes = {
  color: PropTypes.oneOf(["blue", "red", "green", "yellow"]).isRequired,
  playerId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  itsAMe: PropTypes.bool.isRequired,
  changePlayerId: PropTypes.func.isRequired,
};

PlayerSlot.defaultProps = {};

export default PlayerSlot;
