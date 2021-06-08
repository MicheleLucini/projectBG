import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ text, icon, onClick, disabled }) => {
  return (
    <button
      className={"simple-button" + (disabled ? " disabled" : "")}
      type="button"
      onClick={onClick}
    >
      {icon && <span className="material-icons-round">{icon}</span>}
      {text && text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: null,
  icon: null,
  onClick: () => {},
  disabled: false,
};

export default Button;
