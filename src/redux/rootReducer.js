import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authReducer } from "./auth/authReducer";
import { toDoReducer } from "./toDo/toDoReducer";

const authConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token", "user"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  toDoList: toDoReducer,
});
