import React from "react";

export const authenticate = App => Login => {
  return class extends React.Component {
    render() {
      if (localStorage.getItem("usernameLA")) return <App />;
      return <Login />;
    }
  };
};
