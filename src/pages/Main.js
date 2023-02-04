import React from "react";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  const logout = (e) => {
    e.preventDefault();
    history.push("/logout");
  };

  return (
    <div>
      <h3>Main Page</h3>
      <p>Main page content...</p>
      <p>
        <a href="#." onClick={logout}>
          Logout
        </a>
      </p>
    </div>
  );
});
