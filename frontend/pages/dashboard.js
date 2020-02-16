import React, { Component } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard/Index";
import UserContext from "../components/UserContext";
import Router from "next/router";

export class dashboard extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {};
    this.getContent = this.getContent.bind(this);
  }
  getContent() {
    const { status, user } = this.context;
    switch (status) {
      case -1:
        return (
          <div className="text-center my-5 rtl">
            <i className="far fa-frown mx-2"></i>
            <span className="mx-2">
              متاسفانه شما هنوز به سیستم وارد نشده اید
            </span>
          </div>
        );
      case 0:
        return (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-grow text-center" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        );
      case 1:
        const {
          query: { tab }
        } = Router;
        return <Dashboard tab={tab} />;
    }
  }
  render() {
    return (
      <Layout>
        {this.getContent()}
        
      </Layout>
    );
  }
}

export default dashboard;