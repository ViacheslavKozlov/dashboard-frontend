import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Icons from "../../icons/my-icons.svg";
import Icon from "../Icon";
import { CompletedCardStyled } from "./CompletedCardStyled";
import "./CompletedAnimation.css";

const CompletedCard = ({ taskName, isChallenge, onCompleted, onClose }) => {
  const classList = isChallenge ? "challengeBox" : "questBox";

  const classHiddenTrophy = isChallenge ? "" : "hidden";
  const classHiddenTarget = isChallenge ? "hidden" : "";

  const handleClick = () => {
    onClose();
    onCompleted();
  };

  return (
    <CompletedCardStyled>
      <div className={classList}>
        <div className="contentBox">
          <p className="content">COMPLETED:</p>
          <p onClick={onClose} className="link">
            <span className="linkText">{taskName}</span>
          </p>
        </div>
        <div className="awardBox">
          <CSSTransition
            in={true}
            appear={true}
            timeout={1250}
            classNames="leftClouds"
            unmountOnExit
          >
            <svg className="leftClouds">
              <use xlinkHref={`${Icons}#icon-left-clouds`} />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1250}
            classNames="rightClouds"
            unmountOnExit
          >
            <svg className="rightClouds">
              <use xlinkHref={`${Icons}#icon-right-clouds`} />
            </svg>
          </CSSTransition>
          <svg className="iconBase">
            <use xlinkHref={`${Icons}#icon-base`} />
          </svg>

          <div className={classHiddenTrophy}>
            <CSSTransition
              in={true}
              appear={true}
              timeout={1000}
              classNames="trophy"
              unmountOnExit
            >
              <svg className="iconTrophy">
                <use xlinkHref={`${Icons}#icon-trophy-cup`} />
              </svg>
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={2000}
              classNames="first"
              unmountOnExit
            >
              <svg className="iconFirst">
                <use xlinkHref={`${Icons}#icon-first`} />
              </svg>
            </CSSTransition>
          </div>
          <div className={classHiddenTarget}>
            <CSSTransition
              in={true}
              appear={true}
              timeout={1000}
              classNames="target"
              unmountOnExit
            >
              <svg className="iconTarget">
                <use xlinkHref={`${Icons}#icon-target`} />
              </svg>
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={2000}
              classNames="arrow"
              unmountOnExit
            >
              <svg className="iconArrow">
                <use xlinkHref={`${Icons}#icon-arrow`} />
              </svg>
            </CSSTransition>
          </div>
        </div>

        <button onClick={handleClick} className="button">
          <span>Continue</span>
          <Icon className="arrow" name={"arrow-right"} size={7} />
        </button>
      </div>
    </CompletedCardStyled>
  );
};

CompletedCard.propTypes = {
  text: PropTypes.string,
  isChallenge: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default CompletedCard;
