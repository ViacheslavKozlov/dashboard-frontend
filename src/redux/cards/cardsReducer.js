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

const initialState = [
  {
    id: "1",
    isChallenge: false,
    difficulty: "easy",
    taskName: "todo1",
    taskDate: "2021-10-15 18:00",
    category: "stuff",
    completed: true,
  },
  {
    id: "2",
    isChallenge: true,
    difficulty: "normal",
    taskName: "todo2",
    taskDate: "2021-12-15 23:59",
    category: "stuff",
    completed: false,
  },
  {
    id: "3",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo3",
    taskDate: "2021-12-13 23:59",
    category: "family",
    completed: false,
  },
  {
    id: "4",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo4",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: false,
  },
  {
    id: "5",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo5",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: false,
  },
  {
    id: "6",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo6",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: false,
  },
  {
    id: "7",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo7",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: false,
  },
  {
    id: "8",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo8",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: false,
  },
  {
    id: "9",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo9",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: false,
  },
  {
    id: "10",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo10",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: true,
  },
  {
    id: "11",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo11",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: true,
  },
  {
    id: "12",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo12",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: true,
  },
  {
    id: "13",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo13",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: true,
  },
  {
    id: "14",
    isChallenge: false,
    difficulty: "hard",
    taskName: "todo14",
    taskDate: "2021-12-13 23:59",
    category: "stuff",
    completed: true,
  },
];

const allCardsReducer = createReducer(initialState, {
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
