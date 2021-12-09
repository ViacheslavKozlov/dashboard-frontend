import axios from "axios";
import {
  addNewToDoError,
  addNewToDoRequest,
  addNewToDoSucces,
  getToDoListError,
  getToDoListRequest,
  getToDoListSucces,
} from "./toDoActions";

const BASE_URL = "";

const getToDoListOperation = () => async (dispatch) => {
  dispatch(getToDoListRequest());

  try {
    const response = await axios.get(`${BASE_URL}/getToDo`);

    dispatch(getToDoListSucces(response.data));
  } catch (error) {
    dispatch(getToDoListError(error.message));
  }
};

const addToDoOperation = (newToDo) => async (dispatch) => {
  dispatch(addNewToDoRequest());
  try {
    // const response = await axios.post(`${BASE_URL}/add`, newToDo);
    // dispatch(addNewToDoSucces({ ...response.data }));
    dispatch(addNewToDoSucces(newToDo));
  } catch (error) {
    dispatch(addNewToDoError(error.message));
  }
};

export { getToDoListOperation, addToDoOperation };
