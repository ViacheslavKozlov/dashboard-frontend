import React from "react";
import sprite from "../../icons/icons.svg";
import styles from "./Buttot.module.css";

import s from "./Button.module.scss";
// import propTypes from "prop-types";

const ButtonGo = ({ buttonName, type, onClick, btn_auth }) => {
  return (
    <button
      className={`${styles.btn} ${styles.btn_orange} ${btn_auth}`}
      type={type}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

const ButtonAdd = ({ type, onClick }) => {
  return (
    <button
      className={`${styles.btn_add} ${styles.btn_orange_add}`}
      type={type}
      onClick={onClick}
    >
      <svg width="20" height="20" fill="white">
        <use href={sprite + "#add"} />
      </svg>
    </button>
  );
};

const Button = ({ toggle, text, style }) => {
  return (
    // <button type="button" onClick={toggle} className={s[style]}>
    <button type="submit" onClick={toggle} className={s[style]}>
      {text}
    </button>
  );
};

export { ButtonAdd, ButtonGo, Button };

// Button.propTypes = {
//   text: propTypes.string,
//   style: propTypes.oneOf(["cancel", "delete", "plus", "create", "go"])
//     .isRequired,
// };
// export default Button;
