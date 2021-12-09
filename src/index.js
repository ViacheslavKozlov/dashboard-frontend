import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import App from "./Components/App";
import "normalize.css";
import "./index.scss";

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate loading="Loading..." persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);
