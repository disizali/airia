import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Tour from "../components/Tabs/Tour";
import jsCookie from "js-cookie";

import axios from "axios";

export default class Index extends React.Component {
  static async getInitialProps(context) {
    const { data: tours } = await axios.get("http://localhost:3001/tours");
    return { tours };
  }
  constructor(props) {
    super(props);
    this.state = { tab: 1 };
  }
  changeTab(tab) {
    this.setState({ tab });
  }
  render() {
    const { tab } = this.state;
    const { tours } = this.props;
    return (
      <Layout>
        <Splash tab={tab} changeTab={this.changeTab.bind(this)} />
        {tab == 1 && <Tour tours={tours} />}
      </Layout>
    );
  }
}
