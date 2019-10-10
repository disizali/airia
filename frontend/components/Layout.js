import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import "../styles/index.scss";

export class Layout extends Component {
  render() {
    return (
      <main>
        <Head>
          <title>بالهای آسمانی آیریا</title>
          <link rel="icon" src="/static/images/icon.png" />
        </Head>
        <Navbar />
        {this.props.children}
      </main>
    );
  }
}

export default Layout;
