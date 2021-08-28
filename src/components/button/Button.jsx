import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ id, text, icon, onClick, disabled }) => {
  return (
    <button
      id={id}
      className={
        "simple-button" +
        (disabled ? " disabled" : "") +
        (!text ? " icon-only" : "")
      }
      type="button"
      onClick={onClick}
    >
      {icon && <span className="material-icons-round">{icon}</span>}
      {text && text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  id: "",
  text: null,
  icon: null,
  onClick: () => {},
  disabled: false,
};

export default Button;
