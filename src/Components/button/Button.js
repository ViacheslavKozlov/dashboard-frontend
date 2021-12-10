import React from "react";
import sprite from "../../icons/icons.svg";
import styles from "./Buttot.module.css";

const Button = ({ buttonName, type, onClick, btn_auth }) => {
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

export { ButtonAdd, Button };
