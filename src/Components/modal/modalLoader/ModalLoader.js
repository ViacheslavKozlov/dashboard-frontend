import React from "react";
import { createPortal } from "react-dom";
import { ModalLoaderStyled } from "./ModalLoaderStyled";

const modalRoot = document.querySelector("#modalLoader-root");

const ModalLoader = ({ children }) => {
  return createPortal(
    <ModalLoaderStyled>
      <div className="Overlay">
        <div className="Modal">{children}</div>
      </div>
    </ModalLoaderStyled>,
    modalRoot
  );
};

export default ModalLoader;
