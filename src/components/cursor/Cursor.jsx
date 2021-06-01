import React, { useMemo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./cursor.css";

const Cursor = ({ hide }) => {
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

  useEffect(() => {
    document.onmousemove = handleMouseMove;
  });

  return (
    <div id="cursor" className={cursorClass} style={{ top: y, left: x }}></div>
  );
};

Cursor.propTypes = {
  hide: PropTypes.bool,
};

Cursor.defaultProps = {
  hide: false,
};

export default Cursor;
