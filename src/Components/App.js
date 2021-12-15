import React, { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Switch } from "react-router";
import PublicRoute from "../routes/PuplicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import { useSelector } from "react-redux";
import { regSuccessSelector } from "../redux/auth/authSelectors.js";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getErrorCardsSelector } from "../redux/cards/cardsSelectors";
import "react-toastify/dist/ReactToastify.css";

const DashboardPage = lazy(() => import("../pages/DashboardPage.js") /*webpackChunkName: 'DashboardPage' */);
const LoginPage = lazy(() => import("../pages/LoginPage.js") /*webpackChunkName: 'LoginPage' */);
const RegPage = lazy(() => import("../pages/RegPage.js") /*webpackChunkName: 'RegPage' */);

function App() {
  const regSuccess = useSelector(regSuccessSelector);

  const error = useSelector(getErrorCardsSelector);

  useEffect(
    () => {
      toast.error(error);
    },
    [error]
  );

  return (
    <>
      <Switch>
        <Suspense fallback={null}>
          <PublicRoute exact path="/" redirectTo="/dashboard">
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/dashboard">
            {!regSuccess ? <RegPage /> : <Redirect to="/" />}
          </PublicRoute>
          <PrivateRoute path="/dashboard" redirectTo="/">
            <DashboardPage />
          </PrivateRoute>
        </Suspense>
      </Switch>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
