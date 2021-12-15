import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { ModalLoaderStyled } from "./ModalLoaderStyled";

const modalRoot = document.querySelector("#modalLoader-root");

const ModalLoader = ({ children }) => {
  return createPortal(
    <ModalLoaderStyled>
      <CSSTransition in={true} appear={true} timeout={300} classNames="fade" unmountOnExit>
        <div className="Overlay">
          <div className="Modal">{children}</div>
        </div>
      </CSSTransition>
    </ModalLoaderStyled>,
    modalRoot
  );
};

export default ModalLoader;
