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
    // this.checkPayment = this.checkPayment.bind(this);
  }
  // checkPayment() {
  //   const { checked, checking } = this.state;
  //   const { authority } = this.props;

  //   console.log(checked);
  //   if (checked == -1) {
  //     return <Failed />;
  //   }

  //   if (checked == 0 && !checking) {
  //     axios
  //       .post(`http://localhost:3001/payment/reserve/verify`, {
  //         MerchantID: "xxx-xxxx-xxxxx-xxxx-xxx-xxxx-xxxx-xx",
  //         Authority: authority
  //       })
  //       .then(({ data }) => {
  //         if (data == "wrong data") {
  //           return this.setState({ checked: -1, checking: false });
  //         } else if (data == "verified") {
  //           return this.setState({ checked: 1, checking: false });
  //         }
  //       });
  //     this.setState({ checking: true });
  //     return (
  //       <div className="d-flex justify-content-center my-5">
  //         <div className="spinner-grow text-center" role="status">
  //           <span className="sr-only">Loading...</span>
  //         </div>
  //       </div>
  //     );
  //   }

  //   if (checked == 1) {
  //     return <Success />;
  //   }
  // }
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
