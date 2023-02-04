import { timeoutPromise } from "../utils";

export const userLogin = ({ userName, password }) => (dispatch) => {
  return timeoutPromise(1000)
    .then(() =>
      dispatch({
        type: "USER_LOGIN",
        payload: {
          username: userName,
          token: password
        }
      })
    )
    .then((data) => {
      console.log("THEN: ", data);
      localStorage.setItem("user", JSON.stringify(data));
    });
};

export const userLogout = () => (dispatch) => {
  localStorage.clear();
  return dispatch({
    type: "USER_LOGOUT"
  });
};
