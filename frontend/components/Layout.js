import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/index.scss";
// import { initStore } from "../redux/store";
// import withRedux from "next-redux-wrapper";

import axios from "axios";
import jsCookie from "js-cookie";
class Layout extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    const token = jsCookie.get("authtoken");
    if (token == undefined) {
      
    }
  }

  render() {
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
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default Layout;
