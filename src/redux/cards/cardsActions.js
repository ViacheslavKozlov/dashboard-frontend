import { createAction } from "@reduxjs/toolkit";

export const getCardsRequest = createAction("card/getCardsRequest");
export const getCardsSucces = createAction("card/getCardsSucces");
export const getCardsError = createAction("card/getCardsError");

export const getDoneCardsRequest = createAction("card/getDoneCardsRequest");
export const getDoneCardsSuccess = createAction("card/getDoneCardsSuccess");
export const getDoneCardsError = createAction("card/getDoneCardsError");

export const addNewCardRequest = createAction("card/addNewCardRequest");
export const addNewCardSucces = createAction("card/addNewCardSucces");
export const addNewCardError = createAction("card/addNewCardError");

export const removeCardRequest = createAction("card/removeCardRequest");
export const removeCardSucces = createAction("card/removeCardSucces");
export const removeCardError = createAction("card/removeCardError");

export const editCardRequest = createAction("card/editCardRequest");
export const editCardSucces = createAction("card/editCardSucces");
export const editCardError = createAction("card/editCardError");
