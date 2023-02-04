import { timeoutPromise } from "../utils";

export const userLogin = ({ email, password }) => (dispatch) => {
  return timeoutPromise(1000)
    .then(() =>
      dispatch({
        type: "USER_LOGIN",
        payload: {
          email,
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
