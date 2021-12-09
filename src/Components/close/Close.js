import React from "react";
import s from "./Close.module.scss";
import sprite from "../../icons/close.svg";

const Close = ({ toggle }) => {
  return (
    <svg className={s.ModalOpenSvg} onClick={toggle}>
      <use href={sprite + "#icon-close"} />
    </svg>
  );
};

export default Close;
