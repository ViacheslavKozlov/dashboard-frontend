import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import "./PickerPopupAnimation.css";
import { PickerPopupStyled } from "./PickerPopupStyled";

const PickerPopup = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <PickerPopupStyled>
      <div className="backdrop" onClick={handleBackdropClick}></div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="content"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </PickerPopupStyled>
  );
};

PickerPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PickerPopup;
