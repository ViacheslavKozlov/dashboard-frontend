import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "../../button/Button";
import {
  AuthBgContainer,
  AuthContainer,
  AuthDiscrContainer,
  AuthFormContainer,
} from "./AuthFormStyled";
import { useSelector } from "react-redux";
import { regSuccessSelector } from "../../../redux/auth/authSelectors";
// import sprite from "../../../icons/icons.svg";

const AuthForm = ({ signUp, logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const location = useLocation();
  const history = useHistory();

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
    <AuthBgContainer>
      <AuthFormContainer>
        <AuthDiscrContainer>
          <h1 className="authTitle">Questify</h1>
          <p className="authDicsription">
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>

          {location.pathname === "/register" ? (
            <p className="authChooseText">
              {" "}
              Choose your name to SignUp or{" "}
              <a className="authLink" href="/">
                LogIn
              </a>
            </p>
          ) : (
            <p className="authChooseText">
              {" "}
              Choose your name to LogIn or{" "}
              <a className="authLink" href="/register">
                SignUp
              </a>
            </p>
          )}
          {/*<a href="/register">SIGN UP</a>*/}
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
                required
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                className="input"
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
            />
          </label>
          <div className="button_wrapper">
            <Button
              text="go!"
              style="go"
              onClick={() => {
                // let path = `/`;
                history.push("/");
              }}
            />
          </div>
        </form>
      </AuthFormContainer>
    </AuthBgContainer>
  );
};

export default AuthForm;
