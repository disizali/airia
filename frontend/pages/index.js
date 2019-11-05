import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Tour from "../components/Tabs/Tour/Index";
import Magazine from "../components/Tabs/Magazine/index";
import * as api from "../src/api";

export default class Index extends React.Component {
  static async getInitialProps(context) {
    const tours = await api.getTours();
    const magazine = await api.getMagazine();
    return { tours, magazine };
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
    const { tours, magazine } = this.props;
    return (
      <Layout>
        <Splash tab={tab} changeTab={this.changeTab.bind(this)} />
        {tab == 1 && <Tour tours={tours} />}
        {tab == 3 && <Magazine magazine={magazine} />}
      </Layout>
    );
  }
}
