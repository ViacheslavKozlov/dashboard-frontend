import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  loginAuthError,
  loginAuthRequest,
  loginAuthSuccess,
  logoutAuthError,
  logoutAuthRequest,
  logoutAuthSuccess,
  registerAuthError,
  registerAuthRequest,
  registerAuthSuccess,
} from "./authActions";

const authUserReducer = createReducer(null, {
  // [registerAuthSuccess]: (_, { payload }) => payload,

  [registerAuthSuccess]: (_, { payload }) => ({
    userName: payload.displayName,
    email: payload.email,
    iSRegistration: true,
  }),

  // [loginAuthSuccess]: (_, { payload }) => payload,

  [loginAuthSuccess]: (_, { payload }) => ({
    userName: payload.user.name,
    email: payload.user.email,
  }),

  // [loginAuthSuccess]: (_, { payload }) => payload,

  [logoutAuthSuccess]: () => null,
});

const authTokenReducer = createReducer(null, {
  [registerAuthSuccess]: (_, { payload }) => payload.token,
  [loginAuthSuccess]: (_, { payload }) => payload.token,
  [logoutAuthSuccess]: () => null,
});

const authLoadingReducer = createReducer(false, {
  [registerAuthRequest]: () => true,
  [loginAuthRequest]: () => true,
  [logoutAuthRequest]: () => true,
  [registerAuthSuccess]: () => false,
  [loginAuthSuccess]: () => false,
  [logoutAuthSuccess]: () => false,
  [registerAuthError]: () => false,
  [loginAuthError]: () => false,
  [logoutAuthError]: () => false,
});

const authErrorReducer = createReducer("", {
  [registerAuthError]: (_, { payload }) => payload,
  [loginAuthError]: (_, { payload }) => payload,
  [logoutAuthError]: (_, { payload }) => payload,
  [registerAuthRequest]: () => "",
  [loginAuthRequest]: () => "",
  [logoutAuthRequest]: () => "",
});

export const authReducer = combineReducers({
  user: authUserReducer,
  token: authTokenReducer,
  isLoading: authLoadingReducer,
  error: authErrorReducer,
});
