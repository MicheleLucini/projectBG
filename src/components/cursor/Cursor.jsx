import React, { useMemo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./cursor.css";

const Cursor = ({}) => {
  const [hide, setHide] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseUp, setMouseUp] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const cursorClass = useMemo(
    () =>
      [
        hide ? "hidden" : null,
        mouseDown ? "down" : null,
        mouseUp ? "up" : null,
      ].filter((x) => !!x),
    [hide, mouseDown, mouseUp]
  );

  const handleMouseMove = useCallback((event) => {
    const e = event || window.event;
    setX(e.x);
    setY(e.y);
  }, []);

  const handleMouseEnter = useCallback(() => setHide(false), []);
  const handleMouseLeave = useCallback(() => setHide(true), []);
  const handleMouseDown = useCallback(() => {
    setMouseUp(false);
    setMouseDown(true);
  }, []);
  const handleMouseUp = useCallback(() => {
    setMouseDown(false);
    setMouseUp(true);
  }, []);

  useEffect(() => {
    document.onmousemove = handleMouseMove;
    document.onmouseenter = handleMouseEnter;
    document.onmouseleave = handleMouseLeave;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
  });

  return (
    <div
      id="cursor"
      className={cursorClass}
      style={{ transform: "translate(" + x + "px, " + y + "px)" }}
    >
      <div className="cursor"></div>
    </div>
  );
};

Cursor.propTypes = {};

Cursor.defaultProps = {};

export default Cursor;
