import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./Navbar/Index";
import Footer from "./Footer";
import "../styles/index.scss";
import UserContext from "./UserContext";

import * as api from "../src/api";
import jsCookie from "js-cookie";
class Layout extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
  }
  async UNSAFE_componentWillMount() {
    const { logout } = this.context;
    const token = jsCookie.get("authtoken");
    if (token == undefined) {
      return logout();
    }
  }
 
  
  async checkAuth() {
    const { login, logout } = this.context;
    const token = jsCookie.get("authtoken");
    if (token == undefined) {
      return;
    }
    const user = await api.getProfile({
      headers: { authorization: `Bearer ${token}` }
    });
    if (user == "unauthorized") {
      return logout();
    }
    return login(user);
  }

  render() {
    const { status } = this.context;
    if (status == 0) {
      this.checkAuth();
    }
    return (
      <main>
        <Head>
          <title>بالهای آسمانی آیریا</title>
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/images/icon.png"
          />
        </Head>
        <Navbar />
        <div className="children">{this.props.children}</div>
        <Footer />
      </main>
    );
  }
}

export default Layout;
