import { createAction } from "@reduxjs/toolkit";

export const registerAuthRequest = createAction("auth/registerAuthRequest");
export const registerAuthSuccess = createAction("auth/registerAuthSuccess");
export const registerAuthError = createAction("auth/registerAuthError");

export const loginAuthRequest = createAction("auth/loginAuthRequest");
export const loginAuthSuccess = createAction("auth/loginAuthSuccess");
export const loginAuthError = createAction("auth/loginAuthError");

export const logoutAuthRequest = createAction("auth/logoutAuthRequest");
export const logoutAuthSuccess = createAction("auth/logoutAuthSuccess");
export const logoutAuthError = createAction("auth/logoutAuthError");
