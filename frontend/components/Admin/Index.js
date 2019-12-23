import React, { Component } from "react";
import Head from "next/head";
import Tabs from "./Tabs";
import Tours from "./Panels/Tours";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 1 };
    this.changeTab = this.changeTab.bind(this);
    this.getPanel = this.getPanel.bind(this);
  }
  changeTab(selectedTab) {
    this.setState({ selectedTab });
  }
  getPanel() {
    const { selectedTab } = this.state;
    switch (selectedTab) {
      case 1 :
        return <Tours tours={this.props.tours} />;
    }
  }
  render() {
    const { selectedTab } = this.state;
    return (
      <div className="p-2">
        <Head>
          <title>بالهای آسمانی آیریا - پنل مدیریت</title>
        </Head>
        <Tabs selectedTab={selectedTab} changeTab={this.changeTab} />
        {this.getPanel()}
      </div>
    );
  }
}