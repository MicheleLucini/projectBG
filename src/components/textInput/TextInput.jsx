import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import "./textInput.css";

const TextInput = ({ label, value, setValue, placeholder }) => {
  const [isActive, setIsActive] = useState(false);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });
  const onFocus = useCallback(() => {
    setIsActive(true);
  });
  const onBlur = useCallback(() => {
    setIsActive(false);
  });

  return (
    <div
      className={
        "text-input" + (isActive ? " active" : "") + (!!value ? " filled" : "")
      }
    >
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        // validate={validate}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        required="required"
        minLength={1}
      />
      {/* <p>// place for errors</p> */}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  // validate: PropTypes.func,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  label: null,
  value: null,
  // validate: () => {},
  placeholder: null,
};

export default TextInput;
