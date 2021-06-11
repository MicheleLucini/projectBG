import React, { useMemo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./cursor.css";

const Cursor = ({
  playerId,
  cursorData,
  changeCursorX,
  changeCursorY,
  changeCursorHide,
  changeCursorUp,
  changeCursorDown,
}) => {
  // const [hide, setHide] = useState(true);
  // const [mouseDown, setMouseDown] = useState(false);
  // const [mouseUp, setMouseUp] = useState(false);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  const cursorClass = useMemo(() => {
    let color = null;
    switch (playerId) {
      case "playerBlue":
        color = "blue";
        break;
      case "playerRed":
        color = "red";
        break;
      case "playerGreen":
        color = "green";
        break;
      case "playerYellow":
        color = "yellow";
        break;
      default:
        break;
    }
    return [
      cursorData.hide ? "hidden" : null,
      cursorData.mouseDown ? "down" : null,
      cursorData.mouseUp ? "up" : null,
      color,
    ]
      .filter((x) => !!x)
      .join(" ");
  }, [playerId, cursorData.hide, cursorData.mouseDown, cursorData.mouseUp]);

  const handleMouseMove = useCallback((event) => {
    const e = event || window.event;
    changeCursorX(e.x);
    changeCursorY(e.y);
    // setX(e.x);
    // setY(e.y);
  }, []);

  const handleMouseEnter = useCallback(() => {
    changeCursorHide(false);
    // setHide(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    changeCursorUp(false);
    changeCursorHide(true);
    // setMouseUp(false);
    // setHide(true);
  }, []);

  const handleMouseDown = useCallback(() => {
    changeCursorUp(false);
    changeCursorDown(true);
    // setMouseUp(false);
    // setMouseDown(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    changeCursorDown(false);
    changeCursorUp(true);
    // setMouseDown(false);
    // setMouseUp(true);
  }, []);

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    return false;
  }, []);

  useEffect(() => {
    document.onmousemove = handleMouseMove;
    document.onmouseenter = handleMouseEnter;
    document.onmouseleave = handleMouseLeave;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
    document.oncontextmenu = handleContextMenu;
  });

  return (
    <div
      id="cursor"
      className={cursorClass}
      style={{
        transform: "translate(" + cursorData.x + "px, " + cursorData.y + "px)",
      }}
    >
      <div className="cursor"></div>
      <div className="text">{cursorData.text}</div>
    </div>
  );
};

Cursor.propTypes = {
  playerId: PropTypes.string,
  cursorData: PropTypes.object.isRequired,
  changeCursorX: PropTypes.func.isRequired,
  changeCursorY: PropTypes.func.isRequired,
  changeCursorUp: PropTypes.func.isRequired,
  changeCursorDown: PropTypes.func.isRequired,
  changeCursorHide: PropTypes.func.isRequired,
};

Cursor.defaultProps = {
  playerId: null,
};

export default Cursor;
