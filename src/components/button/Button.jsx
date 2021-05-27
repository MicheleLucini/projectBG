import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ text, icon, onClick }) => {
  return (
    <button className="simple-button" type="button" onClick={onClick}>
      {icon && <span className="material-icons-round">{icon}</span>}
      {text && text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: null,
  icon: null,
  onClick: () => {},
};

export default Button;
