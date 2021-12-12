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

  const onStaticCardClick = () => {
    if (completed && !isDeleteModalShown) {
      setIsDeleteModalShown(true);
    } else if (!completed) {
      setEditFormShow(true);
    }
  };

  return editFormShow ? (
    <CreateEditCard
      cardId={id}
      isChallengeProp={isChallenge}
      isCompletedProp={completed}
      textProp={taskName}
      difficultyProp={difficulty}
      categoryProp={category}
      deadlineProp={taskDate}
      handleHideCard={() => setEditFormShow(false)}
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
        completed={completed}
        isDeleteModalShown={isDeleteModalShown}
        onCancelDelete={() => setIsDeleteModalShown(false)}
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
