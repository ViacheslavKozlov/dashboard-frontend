import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../button/Button";
import {
  AuthBgContainer,
  AuthDiscrContainer,
  AuthFormContainer,
} from "./AuthFormStyled";
import { useSelector } from "react-redux";
import { regSuccessSelector } from "../../../redux/auth/authSelectors";

const AuthForm = ({ signUp, logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const location = useLocation();

  const regSuccess = useSelector(regSuccessSelector);

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
    // <AuthBgContainer>
    <AuthFormContainer>
      <AuthBgContainer>
        <AuthDiscrContainer>
          <h1 className="authTitle">Questify</h1>
          <p className="authDicsription">
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>

          {location.pathname === "/register" ? (
            <p className="authChooseText">
              {" "}
              Please SignUp or{" "}
              <a className="authLink" href="/">
                LogIn
              </a>
            </p>
          ) : (
            <p className="authChooseText">
              {" "}
              Please LogIn or{" "}
              <a className="authLink" href="/register">
                SignUp
              </a>
            </p>
          )}
        </AuthDiscrContainer>
        <form
          action="/"
          target="_self"
          onSubmit={onHandleSubmit}
          className="authForm"
        >
          {location.pathname === "/register" && !regSuccess && (
            <label className="inputName">
              <input
                type="text"
                value={displayName}
                onChange={onHandleChange}
                name="displayName"
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                className="input"
                // autoComplete="off"
              />
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
              // autoComplete="off"
            />
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
              // autoComplete="off"
            />
          </label>
          <div className="button_wrapper">
            <Button
              text="go!"
              // eslint-disable-next-line react/style-prop-object
              style="go"
            />
          </div>
        </form>
      </AuthBgContainer>
    </AuthFormContainer>
    // </AuthBgContainer>
  );
};

export default AuthForm;
