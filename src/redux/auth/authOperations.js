import axios from "axios";
import {
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  logoutAuthRequest,
  logoutAuthSuccess,
  logoutAuthError
} from "./authActions";

const BASE_URL = "https://afternoon-garden-29997.herokuapp.com/api";
// const BASE_URL = "http://127.0.0.1:3030/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  }
};

const registerOperation = user => async dispatch => {
  dispatch(registerAuthRequest());

  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, user);
    token.set(data.data.token);
    dispatch(registerAuthSuccess(data.data));
  } catch (error) {
    console.log(error.message);
    dispatch(registerAuthError(error.message));
  }
};

const loginOperation = user => async dispatch => {
  dispatch(loginAuthRequest());
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, user);
    console.log(data);
    token.set(data.data.token);
    dispatch(loginAuthSuccess(data.data));
  } catch (error) {
    dispatch(loginAuthError(error.message));
  }
};

const logoutOperation = () => async dispatch => {
  dispatch(logoutAuthRequest());
  try {
    await axios.post(`${BASE_URL}/users/logout`);
    token.unset();
    dispatch(logoutAuthSuccess());
  } catch (error) {
    dispatch(logoutAuthError(error.message));
  }
};

export { token, registerOperation, loginOperation, logoutOperation };
