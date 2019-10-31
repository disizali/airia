import React, { Component } from "react";
import Layout from "../../components/Layout";
import UserContext from "../../components/UserContext";
import axios from "axios";
import Success from "../../components/Payment/Success";
import Failed from "../../components/Payment/Failed";
import Router from "next/router";

export default class Credit extends Component {
  static contextType = UserContext;

  static async getInitialProps(context) {
    const { query } = context;
    return { authority: query.Authority, status: query.Status };
  }

  constructor(props) {
    super(props);
    let checked = 0;
    if (props.status == "NOK") {
      checked = -1;
    }
    this.state = { checked };
    this.checkPayment = this.checkPayment.bind(this);
  }

  checkPayment() {
    const { checked } = this.state;
    const { authority } = this.props;

    if (checked == -1) {
      return <Failed />;
    }

    if (checked == 0) {
      axios
        .post(`http://localhost:3001/payment/credit/verify`, {
          MerchantID: "xxx-xxxx-xxxxx-xxxx-xxx-xxxx-xxxx-xx",
          Authority: authority
        })
        .then(({ data }) => {
          if (data == "wrong data") {
            return this.setState({ checked: -1 });
          } else if (data == "verified") {
            return this.setState({ checked: 1 });
          }
        });
      return (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-grow text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (checked == 1) {
      return <Success />;
    }
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
        {this.checkPayment()}
        {this.redirect()}
      </Layout>
    );
  }
}
