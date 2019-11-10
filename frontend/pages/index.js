import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Tour from "../components/Tabs/Tour/Index";
import Service from "../components/Tabs/Service/Index";
import Magazine from "../components/Tabs/Magazine/index";
import * as api from "../src/api";
import jsCookie from "js-cookie";

export default class Index extends React.Component {
  static async getInitialProps(context) {
    const tours = await api.getTours();
    const magazine = await api.getMagazine();
    const {
      query: { referral, tab }
    } = context;
    return { tours, magazine, referral, tab };
  }
  constructor(props) {
    super(props);
    switch (props.tab) {
      case "tours":
        this.state = { selectedTab: 1 };
        break;
      case "services":
        this.state = { selectedTab: 2 };
        break;
      case "magazine":
        this.state = { selectedTab: 3 };
        break;
      default:
        this.state = { selectedTab: 1 };
        break;
    }
  }
  changeTab(selectedTab) {
    this.setState({ selectedTab });
  }
  render() {
    const { selectedTab: tab } = this.state;
    const { tours, magazine, referral } = this.props;
    if (referral) {
      jsCookie.set("referral", referral);
    }
    return (
      <Layout>
        <Splash tab={tab} changeTab={this.changeTab.bind(this)} />
        {tab == 1 && <Tour tours={tours} />}
        {tab == 2 && <Service />}
        {tab == 3 && <Magazine magazine={magazine} />}
      </Layout>
    );
  }
}
