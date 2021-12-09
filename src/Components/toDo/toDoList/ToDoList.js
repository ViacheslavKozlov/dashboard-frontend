import React from "react";
import ToDoListItem from "./toDoListItem/ToDoListItem";

const ToDoList = ({ toDoList }) => {
  return (
    <>
      <ul>
        {toDoList.map((item) => (
          <ToDoListItem item={item} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
