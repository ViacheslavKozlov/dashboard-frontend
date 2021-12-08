import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { logoutAuthSuccess } from "../auth/authActions";

import {
  getToDoListRequest,
  getToDoListSucces,
  getToDoListError,
  addNewToDoRequest,
  addNewToDoSucces,
  addNewToDoError,
  removeToDoRequest,
  removeToDoSucces,
  removeToDoError,
  editToDoRequest,
  editToDoSucces,
  editToDoError,
} from "./toDoActions";

const toDoListReducer = createReducer([], {
  [getToDoListSucces]: (_, { payload }) => payload,
  [addNewToDoSucces]: (state, { payload }) => [...state, payload],
  [removeToDoSucces]: (state, { payload }) =>
    state.filter((toDo) => toDo.id !== payload),

  [logoutAuthSuccess]: () => [],
});

const toDoLoadingReducer = createReducer(false, {
  [getToDoListRequest]: () => true,
  [getToDoListSucces]: () => false,
  [getToDoListError]: () => false,
  [addNewToDoRequest]: () => true,
  [addNewToDoSucces]: () => false,
  [addNewToDoError]: () => false,
  [removeToDoRequest]: () => true,
  [removeToDoSucces]: () => false,
  [removeToDoError]: () => false,
  [editToDoRequest]: () => true,
  [editToDoSucces]: () => false,
  [editToDoError]: () => false,
});

const toDoErrorReducer = createReducer("", {
  [getToDoListError]: (_, action) => action.payload,
  [addNewToDoError]: (_, action) => action.payload,
  [removeToDoError]: (_, action) => action.payload,
  [editToDoError]: (_, action) => action.payload,
  [getToDoListRequest]: () => "",
  [addNewToDoRequest]: () => "",
  [removeToDoRequest]: () => "",
  [editToDoRequest]: () => "",
  [logoutAuthSuccess]: () => "",
});

export const toDoReducer = combineReducers({
  items: toDoListReducer,
  isLoading: toDoLoadingReducer,
  error: toDoErrorReducer,
});
