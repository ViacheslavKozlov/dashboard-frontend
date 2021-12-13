import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { logoutAuthSuccess } from "../auth/authActions";

import {
  getCardsRequest,
  getCardsSucces,
  getCardsError,
  addNewCardRequest,
  addNewCardSucces,
  addNewCardError,
  removeCardRequest,
  removeCardSucces,
  removeCardError,
  editCardRequest,
  editCardSucces,
  editCardError,
  getDoneCardsSuccess,
  getDoneCardsRequest,
  getDoneCardsError,
} from "./cardsActions";

const allCardsReducer = createReducer([], {
  [getCardsSucces]: (_, { payload }) => payload,
  [getDoneCardsSuccess]: (state, { payload }) => [...state, ...payload],
  [addNewCardSucces]: (state, { payload }) => [...state, payload],
  [removeCardSucces]: (state, { payload }) =>
    state.filter((card) => card.id !== payload),
  [editCardSucces]: (state, { payload }) => {
    return state.map((card) => {
      if (card.id === payload.id) {
        const updatedCard = Object.assign({}, card, payload);
        return updatedCard;
      }
      return card;
    });
  },
  [logoutAuthSuccess]: () => [],
});

const cardsLoadingReducer = createReducer(false, {
  [getCardsRequest]: () => true,
  [getCardsSucces]: () => false,
  [getCardsError]: () => false,
  [getDoneCardsRequest]: () => true,
  [getDoneCardsSuccess]: () => false,
  [getDoneCardsError]: () => false,
  [addNewCardRequest]: () => true,
  [addNewCardSucces]: () => false,
  [addNewCardError]: () => false,
  [removeCardRequest]: () => true,
  [removeCardSucces]: () => false,
  [removeCardError]: () => false,
  [editCardRequest]: () => true,
  [editCardSucces]: () => false,
  [editCardError]: () => false,
});

const cardsErrorReducer = createReducer("", {
  [getCardsError]: (_, action) => action.payload,
  [addNewCardError]: (_, action) => action.payload,
  [removeCardError]: (_, action) => action.payload,
  [editCardError]: (_, action) => action.payload,
  [getDoneCardsError]: (_, action) => action.payload,
  [getCardsRequest]: () => "",
  [addNewCardRequest]: () => "",
  [removeCardRequest]: () => "",
  [editCardRequest]: () => "",
  [getDoneCardsRequest]: () => "",
  [logoutAuthSuccess]: () => "",
});

export const cardsReducer = combineReducers({
  items: allCardsReducer,
  isLoading: cardsLoadingReducer,
  error: cardsErrorReducer,
});
