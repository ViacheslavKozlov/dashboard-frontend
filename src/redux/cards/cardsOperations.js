import axios from "axios";
import {
  addNewCardError,
  addNewCardRequest,
  addNewCardSucces,
  editCardError,
  editCardRequest,
  editCardSucces,
  getCardsError,
  getCardsRequest,
  getCardsSucces,
  getDoneCardsError,
  getDoneCardsRequest,
  getDoneCardsSuccess,
  removeCardError,
  removeCardRequest,
  removeCardSucces,
} from "./cardsActions";

// const BASE_URL = "http://localhost:3030/api/tasks";
const BASE_URL = "https://afternoon-garden-29997.herokuapp.com/api/tasks";
let config = {
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI3MDRlOTczZDJjNzZiMjY0YWI0NmYiLCJpYXQiOjE2MzkzODUxMjJ9.2avgSsGE3aL8bHHWYJKcuulHAIFcIg6JUfdS71HikXw",
  },
};
// axios.defaults.headers.common.Authorization = `Bearer ''`;

const getActiveCardsOperation = () => async (dispatch) => {
  dispatch(getCardsRequest());

  try {
    const { data } = await axios.get(`${BASE_URL}/allTasks`, config);
    const normalizeData = data.data.tasks.map((task) => ({
      category: task.category,
      isChallenge: task.isChallenge,
      difficulty: task.difficulty,
      taskName: task.taskName,
      taskDate: task.taskDate,
      completed: task.completed,
      id: task._id,
    }));
    dispatch(getCardsSucces(normalizeData));
  } catch (error) {
    dispatch(getCardsError(error.message));
  }
};

const getDoneCardsOperation = () => (dispatch) => {
  dispatch(getDoneCardsRequest());

  axios
    .get("cards?completed=true")
    .then(({ data }) => dispatch(getDoneCardsSuccess(data.result.cards)))
    .catch((err) =>
      dispatch(getDoneCardsError(err.response?.data?.message || err.message))
    );
};

const addNewCardOperation = (card) => async (dispatch) => {
  dispatch(addNewCardRequest());
  try {
    const { data } = await axios.post(`${BASE_URL}/addTask`, card, config);
    dispatch(
      addNewCardSucces({
        category: data.data.task.category,
        isChallenge: data.data.task.isChallenge,
        difficulty: data.data.task.difficulty,
        taskName: data.data.task.taskName,
        taskDate: data.data.task.taskDate,
        completed: data.data.task.completed,
        id: data.data.task._id,
      })
    );
  } catch (error) {
    dispatch(addNewCardError(error.message));
  }
};

const removeCardOperation = (taskId) => async (dispatch) => {
  dispatch(removeCardRequest());
  try {
    await axios.delete(`${BASE_URL}/${taskId}`, config);
    dispatch(removeCardSucces(taskId));
  } catch (error) {
    dispatch(removeCardError(error.message));
  }
  // axios
  //   .delete(`cards/${cardId}`)
  //   .then(() => dispatch(removeCardSucces(cardId)))
  //   .catch((err) =>
  //     dispatch(removeCardError(err.response?.data?.message || err.message))
  //   );
};

const editCardOperation = (cardId, card) => async (dispatch) => {
  dispatch(editCardRequest());
  try {
    const { data } = await axios.patch(`${BASE_URL}/${cardId}`, card, config);
    // console.log(response);
    dispatch(
      editCardSucces({
        category: data.data.contact.category,
        isChallenge: data.data.contact.isChallenge,
        difficulty: data.data.contact.difficulty,
        taskName: data.data.contact.taskName,
        taskDate: data.data.contact.taskDate,
        completed: data.data.contact.completed,
        id: data.data.contact._id,
      })
    );
  } catch (error) {
    dispatch(editCardError(error.message));
  }
  // axios
  //   .put(`cards/${cardId}`, card)
  //   .then(({ data }) => dispatch(editCardSucces(data.result)))
  //   .catch((err) =>
  //     dispatch(editCardError(err.response?.data?.message || err.message))
  //   );
};

export {
  getActiveCardsOperation,
  getDoneCardsOperation,
  addNewCardOperation,
  removeCardOperation,
  editCardOperation,
};
