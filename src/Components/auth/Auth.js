import React from "react";
import { useDispatch } from "react-redux";
import { registerOperation, loginOperation } from "../../redux/auth/authOperations";
import AuthForm from "./authForm/AuthForm";

const Auth = () => {
  const dispatch = useDispatch();

  const signUp = user => dispatch(registerOperation(user));
  const logIn = user => dispatch(loginOperation(user));
  return (
    <>
      <AuthForm signUp={signUp} logIn={logIn} />
    </>
  );
};

export default Auth;
