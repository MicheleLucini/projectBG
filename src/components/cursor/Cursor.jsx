import React, { useMemo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./cursor.css";

const Cursor = ({}) => {
  const [hide, setHide] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const cursorClass = useMemo(
    () => [hide ? "hidden" : null].filter((x) => !!x),
    [hide]
  );

  const handleMouseMove = useCallback((event) => {
    const e = event || window.event;
    setX(e.x + 1);
    setY(e.y + 1);
  }, []);

  const handleMouseEnter = useCallback(() => setHide(false), []);
  const handleMouseLeave = useCallback(() => setHide(true), []);

  useEffect(() => {
    document.onmousemove = handleMouseMove;
    document.onmouseenter = handleMouseEnter;
    document.onmouseleave = handleMouseLeave;
  });

  return (
    <div id="cursor" className={cursorClass} style={{ top: y, left: x }}></div>
  );
};

Cursor.propTypes = {};

Cursor.defaultProps = {};

export default Cursor;
