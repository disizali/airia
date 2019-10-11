import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Tour from "../components/Tour/Index";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1 };
  }
  changeTab(tab) {
    this.setState({ tab });
  }
  render() {
    const { tab } = this.state;
    return (
      <Layout>
        <Splash tab={tab} changeTab={this.changeTab.bind(this)} />
        {tab==1 && <Tour />}
      </Layout>
    );
  }
}
