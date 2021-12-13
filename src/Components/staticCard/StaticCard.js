import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Icon from "../Icon";
import DeleteModal from "../deleteModal/DeleteModal";

import {
  editCardOperation,
  removeCardOperation,
} from "../../redux/cards/cardsOperations";
import { StaticCardStyled } from "./StaticCardStyled";
import CompletedCard from "../completedCard/CompletedCard";

const StaticCard = ({
  cardId,
  isChallenge,
  difficulty,
  category,
  taskDate,
  taskName,
  completed,
  handleHideCard,
  isDeleteModalShown,
  onCancelDelete,
  onCompletingModalClosed,
}) => {
  const optionsTime = { hour12: false, hour: "numeric", minute: "numeric" };
  const date = new Date(taskDate).toLocaleTimeString("en-US", optionsTime);
  let time;

  if (
    new Date().toLocaleDateString() === new Date(taskDate).toLocaleDateString()
  ) {
    time = `Today, ${date}`;
  } else if (new Date().getDate() + 1 === new Date(taskDate).getDate()) {
    time = `Tomorrow, ${date}`;
  } else {
    time = new Date(taskDate).toLocaleTimeString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    });
  }

  const onStaticContinueClick = () => {
    dispatch(
      editCardOperation(cardId, {
        taskName,
        isChallenge,
        completed,
        category,
        difficulty,
        taskDate,
      })
    );
    handleHideCard();
  };

  const isFireShow =
    Date.parse(taskDate) - Date.now() <= 3600000 &&
    Date.parse(taskDate) - Date.now() > 0;

  const dispatch = useDispatch();
  const onDeleteCard = () => {
    dispatch(removeCardOperation(cardId));
  };

  return (
    <StaticCardStyled>
      <div className={isChallenge ? "ContainerChallenge" : "baseContainer"}>
        {completed && (
          <CompletedCard
            taskName={taskName}
            isChallenge={isChallenge}
            onCompleted={onStaticContinueClick}
            onClose={onCompletingModalClosed}
          />
        )}
        {isDeleteModalShown && (
          <DeleteModal
            isChallenge={isChallenge}
            onClose={onCancelDelete}
            onDelete={onDeleteCard}
          />
        )}
        <div className="difficultyContainer">
          <div className="difficultyLevel">
            <div className={`${difficulty}`.toLowerCase()}></div>
            <h3 className="difficulty">{difficulty}</h3>
          </div>

          <Icon
            className={isChallenge ? "IconTrophy" : "IconStar"}
            name={isChallenge ? "trophy" : "Star"}
            color="#00d7ff"
          />
        </div>

        {isChallenge && <h3 className="cardType">CHALLENGE</h3>}
        <h2 className={isChallenge ? "taskNameChallenge" : "taskNameBase"}>
          {taskName}
        </h2>

        <p className="dateStyle">
          {isChallenge && "by "}
          {time}
          {isFireShow && (
            <Icon className="IconFire" name="fire" color="#00d7ff" />
          )}
        </p>
        <div>
          <div className={`${category}`}>{category}</div>
        </div>
      </div>
    </StaticCardStyled>
  );
};

StaticCard.propTypes = {
  isChallenge: PropTypes.bool,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  taskDate: PropTypes.string,
  taskName: PropTypes.string,
  isCompleted: PropTypes.bool,
};

export default StaticCard;
