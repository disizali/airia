import React, { Component } from "react";
import Layout from "../../../components/Layout";
import UserContext from "../../../components/UserContext";
import axios from "axios";
import Success from "../../../components/Payment/Success";
import Failed from "../../../components/Payment/Failed";
import Router from "next/router";

export class reserve extends Component {
  static contextType = UserContext;

  static async getInitialProps(context) {
    const { query } = context;
    if (query.Status == "NOK") {
      return { result: false };
    }
    const { data } = await axios.post(
      `http://localhost:3001/payment/reserve/verify`,
      {
        MerchantID: "xxx-xxxx-xxxxx-xxxx-xxx-xxxx-xxxx-xx",
        Authority: query.Authority
      }
    );
    if (data == "wrong data") {
      return { result: false };
    } else if (data == "verified") {
      return { result: true };
    }
    return { authority: query.Authority, status: query.Status };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  redirect() {
    if (Router.router != null) {
      setTimeout(() => {
        Router.push("/");
      }, 5000);
    }
  }
  render() {
    return (
      <Layout>
        {this.props.result ? <Success /> : <Failed />}
        {this.redirect()}
      </Layout>
    );
  }
}

export default reserve;
