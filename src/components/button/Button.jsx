import React from "react";
import PropTypes from "prop-types";

const Button = ({ text }) => {
  return <a>{text}</a>;
};

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  active: null,
};

export default Button;
