import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import DeleteModal from "../deleteModal/DeleteModal";
import CompletedCard from "../completedCard/CompletedCard";
import DateTimePicker from "../dateTimePicker/DateTimePicker";
import OptionsPicker from "../optionsPicker/OptionsPicker";
import Icon from "../Icon";
import {
  addNewCardOperation,
  editCardOperation,
  removeCardOperation,
} from "../../redux/cards/cardsOperations";
import { addNewCardError, editCardError } from "../../redux/cards/cardsActions";
import { CreateEditCardStyled } from "./CreateEditCardStyled";

const TITLES = {
  EDIT_CHALLENGE: "EDIT CHALLENGE",
  CREATE_CHALLENGE: "CREATE NEW CHALLENGE",
  EDIT_QUEST: "EDIT QUEST",
  CREATE_QUEST: "CREATE NEW QUEST",
};

const ADDITIONAL_TIME = 60000;

const CreateEditCard = ({
  isChallengeProp = false,
  completed = false,
  textProp = "",
  difficultyProp = "normal",
  categoryProp = "stuff",
  deadlineProp = new Date(),
  cardId = null,
  handleHideCard,
  handleCardCompletedStatus,
  onCompletingModalClosed,
}) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  // const [completed, setCompleted] = useState(isCompletedProp);
  const [taskName, setTaskName] = useState(textProp);
  const [isChallenge, setIsChallenge] = useState(isChallengeProp);
  const [category, setCategory] = useState(categoryProp);
  const [difficulty, setDifficulty] = useState(difficultyProp);
  const [taskDate, setTaskDate] = useState(deadlineProp);

  const onDeleteBtnClick = () => {
    setIsDeleting(true);
  };

  const onCancelBtnClick = () => {
    setIsDeleting(false);
  };

  const handleDeleteCard = () => dispatch(removeCardOperation(cardId));

  const onInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleCardTypeToggle = () => {
    setIsChallenge((prevState) => !prevState);
  };

  const onClickCreateCard = () =>
    dispatch(
      addNewCardOperation({
        taskName,
        taskDate: moment(taskDate).format("YYYY-MM-DD HH:mm"),
        difficulty,
        category,
        isChallenge,
        completed,
      })
    );

  const handleCreateCard = () => {
    if (taskName.trim() === "") {
      dispatch(addNewCardError("Please, enter some text."));
      return;
    }

    onClickCreateCard();
    handleHideCard();
  };

  const onClickEditCard = (date) =>
    dispatch(
      editCardOperation(cardId, {
        taskName,
        isChallenge,
        completed,
        category,
        difficulty,
        taskDate: moment(date).format("YYYY-MM-DD HH:mm"),
      })
    );

  const handleEditCard = () => {
    let date = taskDate;
    if (new Date() >= new Date(taskDate)) {
      date = new Date(new Date().getTime() + ADDITIONAL_TIME);
    }

    if (taskName.trim() === "") {
      dispatch(editCardError("Please, enter some text."));
      return;
    }

    onClickEditCard(date);
    handleHideCard();
  };

  return (
    <CreateEditCardStyled>
      <div className="cardBackdrop" onClick={handleHideCard}></div>
      <div className={isChallenge ? "cardChallenge" : "card"}>
        {completed && (
          <CompletedCard
            taskName={taskName}
            isChallenge={isChallenge}
            onCompleted={handleEditCard}
            onClose={onCompletingModalClosed}
          />
        )}
        {isDeleting && (
          <DeleteModal
            isChallenge={isChallenge}
            onClose={onCancelBtnClick}
            onDelete={textProp ? handleDeleteCard : handleHideCard}
          />
        )}
        <div className="cardTopButtons">
          <OptionsPicker
            type="difficulty"
            getOptionValue={setDifficulty}
            initialValue={difficulty}
            isChallenge={isChallenge}
          />
          <button type="button" onClick={handleCardTypeToggle}>
            {isChallenge ? (
              <Icon
                className="trophyIcon"
                name="trophy"
                color="#00d7ff"
                size={15}
              />
            ) : (
              <Icon
                className="starIcon"
                name="Star"
                color="#00d7ff"
                size={15}
              />
            )}
          </button>
        </div>
        <h3 className="cardTitle">
          {isChallenge
            ? textProp
              ? TITLES.EDIT_CHALLENGE
              : TITLES.CREATE_CHALLENGE
            : textProp
            ? TITLES.EDIT_QUEST
            : TITLES.CREATE_QUEST}
        </h3>
        <div className="cardInputWrapper">
          <input
            className={isChallenge ? "cardInputChallenge" : "cardInput"}
            autoComplete="off"
            autoFocus
            type="text"
            name="quest"
            value={taskName}
            onChange={onInputChange}
          />
        </div>
        <div className="datePicker">
          <DateTimePicker deadline={taskDate} handleDateChange={setTaskDate} />
        </div>
        <div className="cardBottomButtons">
          <OptionsPicker
            type="category"
            getOptionValue={setCategory}
            initialValue={category}
            isChallenge={isChallenge}
          />
          <div className="cardOperationsButtons">
            {textProp ? (
              <ul className="buttonsList">
                <li>
                  <button type="button" onClick={handleEditCard}>
                    <Icon
                      className="saveIcon"
                      name="save"
                      color="#00d7ff"
                      size={10}
                    />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onDeleteBtnClick}>
                    <Icon
                      className="clearIcon"
                      name="clear"
                      color="#DB0837"
                      size={10}
                    />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleCardCompletedStatus}>
                    <Icon
                      className="doneIcon"
                      name="done"
                      color="#24d40c"
                      size={14}
                    />
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="buttonsList">
                <li>
                  <button type="button" onClick={onDeleteBtnClick}>
                    <Icon
                      className="clearIcon"
                      name="clear"
                      color="#db0837"
                      size={10}
                    />
                  </button>
                </li>
                <li>
                  <button
                    className="createBtn"
                    type="button"
                    onClick={handleCreateCard}
                  >
                    <span>CREATE</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </CreateEditCardStyled>
  );
};

CreateEditCard.propTypes = {
  isChallengeProp: PropTypes.bool,
  isCompletedProp: PropTypes.bool,
  textProp: PropTypes.string,
  difficultyProp: PropTypes.string,
  categoryProp: PropTypes.string,
  deadlineProp: PropTypes.string,
  cardId: PropTypes.string,
  handleHideCard: PropTypes.func.isRequired,
};

export default CreateEditCard;
