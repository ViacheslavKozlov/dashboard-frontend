import { createAction } from "@reduxjs/toolkit";

export const getToDoListRequest = createAction("toDo/getToDoListRequest");
export const getToDoListSucces = createAction("toDo/getToDoListSucces");
export const getToDoListError = createAction("toDo/getToDoListError");

export const addNewToDoRequest = createAction("toDo/addNewToDoRequest");
export const addNewToDoSucces = createAction("toDo/addNewToDoSucces");
export const addNewToDoError = createAction("toDo/addNewToDoError");

export const removeToDoRequest = createAction("toDo/removeToDoRequest");
export const removeToDoSucces = createAction("toDo/removeToDoSucces");
export const removeToDoError = createAction("toDo/removeToDoError");

export const editToDoRequest = createAction("toDo/editToDoRequest");
export const editToDoSucces = createAction("toDo/editToDoSucces");
export const editToDoError = createAction("toDo/editToDoError");
