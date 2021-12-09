import React from "react";

const ToDoListItem = ({ item }) => {
  return <li key={item.taskName}>{item.taskName}</li>;
};

export default ToDoListItem;
