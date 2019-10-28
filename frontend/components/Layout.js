import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/index.scss";
import UserContext from "./UserContext";

import axios from "axios";
import jsCookie from "js-cookie";
class Layout extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    const token = jsCookie.get("authtoken");
    if (token == undefined) {
    }
  }

  async checkAuth() {
    const { login, logout } = this.context;
    const token = jsCookie.get("authtoken");
    const { data: user } = await axios.get("http://localhost:3001/profile", {
      headers: { authorization: `Bearer ${token}` }
    });
    if (user == "unauthorized") {
      return logout(user);
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
        <div className="children">
        {this.props.children}
        </div>
        <Footer />
      </main>
    );
  }
}

export default Layout;
