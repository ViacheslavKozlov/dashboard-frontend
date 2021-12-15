import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerOperation,
  loginOperation,
} from "../../redux/auth/authOperations";
import { regSuccessSelector } from "../../redux/auth/authSelectors";
import AuthForm from "./authForm/AuthForm";

const Auth = () => {
  const dispatch = useDispatch();

  const signUp = (user) => dispatch(registerOperation(user));
  const logIn = (user) => dispatch(loginOperation(user));
  return (
    <>
      <AuthForm signUp={signUp} logIn={logIn} />
    </>
  );
};

export default Auth;
