import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./DeleteModalAnimation.css";
import { DeleteModalStyled } from "./DeleteModalStyled";

const DeleteModal = ({ isChallenge, onClose, onDelete }) => {
  const cardType = isChallenge ? "Challenge" : "Quest";

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

  const handleCancelBtnClick = () => {
    onClose();
  };

  const handleDeleteBtnClick = () => {
    onDelete();
    onClose();
  };

  return (
    <DeleteModalStyled>
      <div className="backdrop" onClick={handleBackdropClick}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames="content"
          unmountOnExit
        >
          <div className="content">
            <p className="confirm">Delete this {cardType}?</p>
            <div className="buttonWrapper">
              <button
                className="button"
                onClick={handleCancelBtnClick}
                type="button"
              >
                cancel
              </button>
              <button
                className="button"
                onClick={handleDeleteBtnClick}
                type="button"
              >
                delete
              </button>
            </div>
          </div>
        </CSSTransition>
      </div>
    </DeleteModalStyled>
  );
};

export default DeleteModal;

DeleteModal.propTypes = {
  isChallenge: PropTypes.bool,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
};
