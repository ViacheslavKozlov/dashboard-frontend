import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthFormContainer } from "./AuthFormStyled";

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
        Choose your name to log in or
        <a href="/signup">sign up</a>
      </p>
      <form onSubmit={onHandleSubmit} className="authForm">
        {location.pathname === "/signup" && (
          <label className="inputName">
            Name
            <input
              type="text"
              value={displayName}
              onChange={onHandleChange}
              name="displayName"
              className="input"
            />
          </label>
        )}
        <label className="inputName">
          Email
          <input
            type="text"
            value={email}
            onChange={onHandleChange}
            name="email"
            className="input"
          />
        </label>
        <label className="inputName">
          Password
          <input
            type="text"
            value={password}
            onChange={onHandleChange}
            required
            pattern="^[A-Za-z]+\d+.*$"
            title="Пароль должен включать только цифры и буквы"
            name="password"
            className="input"
          />
        </label>
        <button type="submit" className="btn">
          <svg width="52" height="52">
            <use href="../../icons/icons.svg#icon-button-Add" />
          </svg>
        </button>
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;
