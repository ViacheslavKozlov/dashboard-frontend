import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToDoOperation } from "../../redux/toDo/toDoOperations";
import { toDoSelector } from "../../redux/toDo/toDoSelectors";

import ToDoForm from "./toDoForm/ToDoForm";
import ToDoList from "./toDoList/ToDoList";

const ToDo = () => {
  const toDoList = useSelector(toDoSelector);
  const dispatch = useDispatch();

  const onAddNewToDo = (newToDo) => {
    dispatch(addToDoOperation(newToDo));
  };
  return (
    <>
      <ToDoForm onAddNewToDo={onAddNewToDo} />
      <ToDoList toDoList={toDoList} />
    </>
  );
};

export default ToDo;
