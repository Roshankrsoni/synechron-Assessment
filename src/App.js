import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "./pages/Login";
import LogoutPage from "./pages/Logout";
import MainPage from "./pages/Main";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedUser = useSelector((state) => state.user);
  const checkIfLoggedIn =
    loggedUser?.token === "admin" && loggedUser?.email === "admin@gmail.com";

  if (checkIfLoggedIn) {
    console.log("PrivateRoute: logged in");
  } else {
    console.log("PrivateRoute: Not logged in!");
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        checkIfLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default () => (
  <Router>
    <Route name="login" path="/login" component={LoginPage} />
    <PrivateRoute name="logout" path="/logout" component={LogoutPage} />
    <PrivateRoute name="main" path="/main" component={MainPage} />
    <Redirect from="/" to="main" />
  </Router>
);
