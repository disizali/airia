import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import "../styles/index.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class Layout extends Component {
  render() {
    return (
      <main>
        <Head>
          <title>بالهای آسمانی آیریا</title>
          <link
            rel="shortcut icon"
            type="image/png"
            src="/static/images/icon.png"
          />
        </Head>
        <Navbar />
        {this.props.children}
      </main>
    );
  }
}
