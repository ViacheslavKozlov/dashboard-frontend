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
import { nanoid } from "nanoid";

const BASE_URL = "";

const getActiveCardsOperation = () => async (dispatch) => {
  dispatch(getCardsRequest());

  try {
    const response = await axios.get(`${BASE_URL}/cards?completed=false`);

    dispatch(getCardsSucces(response.data));
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
    // const response = await axios.post(`${BASE_URL}/add`, newToDo);
    // dispatch(addNewToDoSucces({ ...response.data }));
    dispatch(addNewCardSucces({ ...card, id: nanoid() }));
  } catch (error) {
    dispatch(addNewCardError(error.message));
  }
};

const removeCardOperation = (id) => async (dispatch) => {
  dispatch(removeCardRequest());
  try {
    // await axios.delete(`${BASE_URL}/contacts/${id}`);
    dispatch(removeCardSucces(id));
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

const editCardOperation = (cardId, card) => (dispatch) => {
  dispatch(editCardRequest());
  dispatch(editCardSucces({ ...card, id: cardId }));
  try {
  } catch (error) {}
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
