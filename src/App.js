import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "./pages/Login";
import LogoutPage from "./pages/Logout";
import MainPage from "./pages/Main";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.user);

  if (loggedIn?.token !== "admin" && loggedIn?.username !== "admin") {
    console.log("PrivateRoute: Not logged in!");
  } else {
    console.log("PrivateRoute: logged in");
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !loggedIn?.token ? (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
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
