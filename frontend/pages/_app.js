import React from "react";
import App from "next/app";
import UserContext from "../components/UserContext";
import jsCookie from "js-cookie";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      status: 0
    };
  }

  changeStatus = status => {
    setTimeout(() => {
      this.setState({ status });
    }, 5000);
  };

  login = user => {
    this.setState({ status: 1, user });
  };

  logout = () => {
    jsCookie.remove("authtoken");
    this.setState({ status: -1, user: null });
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
