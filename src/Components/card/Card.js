import { useState } from "react";
import PropTypes from "prop-types";

import StaticCard from "../staticCard/StaticCard";
import CreateEditCard from "../createEditCard/CreateEditCard";

const Card = ({
  id,
  isChallenge,
  difficulty,
  category,
  taskDate,
  taskName,
  completed,
}) => {
  const [editFormShow, setEditFormShow] = useState(false);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [completedStatus, setCompleted] = useState(false);

  const onStaticCardClick = (e) => {
    if (e.target.id === "Star" || e.target.id === "trophy") {
      setCompleted(true);
      return;
    }
    if (completed && !isDeleteModalShown) {
      setIsDeleteModalShown(true);
    } else if (!completed) {
      setEditFormShow(true);
    }
  };

  const handleCardCompletedStatus = () => {
    setCompleted(true);
  };

  const onCompletingModalClosed = () => {
    setCompleted(false);
  };

  return editFormShow ? (
    <CreateEditCard
      cardId={id}
      isChallengeProp={isChallenge}
      completed={completedStatus}
      textProp={taskName}
      difficultyProp={difficulty}
      categoryProp={category}
      deadlineProp={taskDate}
      handleHideCard={() => setEditFormShow(false)}
      handleCardCompletedStatus={handleCardCompletedStatus}
      onCompletingModalClosed={onCompletingModalClosed}
    />
  ) : (
    <div onClick={onStaticCardClick}>
      <StaticCard
        cardId={id}
        isChallenge={isChallenge}
        difficulty={difficulty}
        category={category}
        taskDate={taskDate}
        taskName={taskName}
        completed={completedStatus}
        isDeleteModalShown={isDeleteModalShown}
        onCancelDelete={() => setIsDeleteModalShown(false)}
        handleHideCard={() => setEditFormShow(false)}
        handleCardCompletedStatus={handleCardCompletedStatus}
        onCompletingModalClosed={onCompletingModalClosed}
      />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  isChallenge: PropTypes.bool,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  deadline: PropTypes.string,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
};

export default Card;
