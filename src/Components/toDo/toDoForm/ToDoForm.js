import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { ToDoFormListStyled } from "./ToDoFormStyled";

const difficultyValues = ["easy", "normal", "hard"];
const cardTypeValues = ["quest", "challenge"];
const categoryValues = [
  "stuff",
  "family",
  "health",
  "learning",
  "leisure",
  "work",
];

const initialState = {
  cardType: "quest",
  enum: ["quest", "challenge"],
  difficulty: "easy",
  taskName: "",
  // taskDate: "",
  category: "stuff",
  compleated: false,
};
const ToDoForm = ({ onAddNewToDo }) => {
  const [toDo, setToDo] = useState(initialState);
  const [startDate, setStartDate] = useState(new Date());

  // const todayDate = new Date();
  // const todayDate = moment(new Date()).format("YYYY-MM-DD");

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setToDo((prev) => ({ ...prev, [name]: value }));
  };

  const onHandelSubmitForm = (e) => {
    e.preventDefault();
    localStorage.removeItem("name");
    localStorage.removeItem("number");
    onAddNewToDo({ ...toDo, taskDate: startDate });
    setStartDate(new Date());
    setToDo({ ...initialState, taskDate: startDate });
  };

  return (
    <ToDoFormListStyled>
      <div className="form-box">
        <form onSubmit={onHandelSubmitForm}>
          <div className="difficulty-box">
            <select name="difficulty" onChange={onHandleChange}>
              {difficultyValues.map((item) => (
                <option
                  key={item}
                  value={item}
                  selected={toDo.difficulty === item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          <select name="cardType" onChange={onHandleChange}>
            {cardTypeValues.map((item) => (
              <option
                key={item}
                value={item}
                selected={toDo.difficulty === item}
              >
                {item}
              </option>
            ))}
          </select>
          <div className="user-box">
            <input
              id="taskName"
              type="text"
              name="taskName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Имя может состоять только из букв, апострофа, тире и пробелов."
              required
              onChange={onHandleChange}
              value={toDo.taskName}
            />
            <label htmlFor="taskName">Create new {toDo.cardType}</label>
          </div>
          <DatePicker
            showTimeSelect
            name="taskDate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <select name="category" onChange={onHandleChange}>
            {categoryValues.map((item) => (
              <option
                key={item}
                value={item}
                selected={toDo.difficulty === item}
              >
                {item}
              </option>
            ))}
          </select>
          <div className="form-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </ToDoFormListStyled>
  );
};

export default ToDoForm;
