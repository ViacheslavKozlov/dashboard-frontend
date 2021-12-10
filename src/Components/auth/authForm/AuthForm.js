import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../button/Button";
import { AuthFormContainer } from "./AuthFormStyled";
import sprite from "../../../icons/icons.svg";

const AuthForm = ({ signUp, logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "displayName" && setDisplayName(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/register"
      ? signUp({ email, password, displayName })
      : logIn({ email, password });
  };

  return (
    <AuthFormContainer>
      <h1 className="authTitle">Questify</h1>
      <p className="authDicsription">
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>
      <p className="authChooseText">
        Choose your name to Log in or
        <a href="/signup">SIGN UP</a>
      </p>
      <form onSubmit={onHandleSubmit} className="authForm">
        {location.pathname === "/signup" && (
          <label className="inputName">
            <input
              type="text"
              value={displayName}
              onChange={onHandleChange}
              name="displayName"
              placeholder="Name"
              required
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              className="input"
            />
            <hr className="input_line" />
          </label>
        )}
        <label className="inputName">
          <input
            type="text"
            value={email}
            onChange={onHandleChange}
            name="email"
            placeholder="Email"
            className="input"
          />
          <hr className="input_line" />
        </label>
        <label className="inputName">
          <input
            type="text"
            value={password}
            onChange={onHandleChange}
            required
            pattern="^[A-Za-z]+\d+.*$"
            title="Пароль должен включать только цифры и буквы"
            name="password"
            placeholder="Password"
            className="input"
          />
          <hr className="input_line" />
        </label>
        {/* <button type="submit" className="btn">
          <span>
            <svg width="52" height="52">
              <use href="../../../icons/icons.svg#icon-button-GO" />
            </svg>
          </span>
        </button> */}
        <Button
          buttonName={sprite + "#icongo"}
          type={"submit"}
          // onClick={onMobileSubmit}
        />
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;
