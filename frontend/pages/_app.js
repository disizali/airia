import React from "react";
import App from "next/app";
import UserContext from "../components/UserContext";

class MyApp extends App {
  state = {
    user: null,
    status: 0
  };

  changeStatus = status => {
    this.setState({ status });
  };

  login = user => {
    this.setState({ user });
  };

  logout = () => {
    this.setState({ user: null });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          status: this.state.status,
          login: this.login,
          logout: this.logout
        }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}

export default MyApp;
