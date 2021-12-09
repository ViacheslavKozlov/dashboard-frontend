import React from "react";
import s from "./Button.module.scss";
import propTypes from "prop-types";

const Button = ({ toggle, text, style }) => {
  return (
    <button type="button" onClick={toggle} className={s[style]}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string,
  style: propTypes.oneOf(["cancel", "delete", "plus", "create", "go"])
    .isRequired,
};
export default Button;
