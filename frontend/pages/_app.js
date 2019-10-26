import React from "react";
import App from "next/app";
import UserContext from "../components/UserContext";
import jsCookie from "js-cookie";
import axios from "axios";

class MyApp extends App {
  constructor(props) {
    super(props);
    const initialStatus = jsCookie.get("authtoken") == undefined ? -1 : 0;
    this.state = {
      user: null,
      status: initialStatus
    };
  }

  changeStatus = status => {
    this.setState({ status });
  };

  login = user => {
    this.setState({ user });
  };

  logout = () => {
    this.setState({ user: null });
  };

  async checkAuth() {
    const token = jsCookie.get("authtoken");
    const { data: user } = await axios.get("http://localhost:3001/profile", {
      headers: { authorization: `Bearer ${token}` }
    });
    if (user == "unauthorized") {
      return this.setState({ status: -1, user: null });
    }
    return this.setState({ status: 1, user });
  }
  render() {
    if (this.state.status == 0) {
      this.checkAuth();
    }
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
