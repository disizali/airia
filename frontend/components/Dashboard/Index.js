import React, { Component } from "react";
import Tabs from "./Tabs";
import Profile from "./Profile/Index";
import Credit from "./Credit";
import Favorites from "./Favorites";
import History from "./History";
import Router from "next/router";
export class dashboard extends Component {
  constructor(props) {
    super(props);
    const garantedTabs = ["profile", "credit", "favorites", "history"];

    this.state = {
      tab: garantedTabs.includes(props.tab) ? props.tab : "profile"
    };
    this.changeTab = this.changeTab.bind(this);
    this.getTabContent = this.getTabContent.bind(this);
  }
  changeTab(tab) {
    const href = `/dashboard/${tab}`;
    Router.push(Router.pathname, href, { shallow: true });
    this.setState({ tab });
  }
  getTabContent() {
    switch (this.state.tab) {
      case "profile":
        return <Profile />;
      case "credit":
        return <Credit />;
      case "favorites":
        return <Favorites />;
      case "history":
        return <History />;
      default:
        return <Profile />;
    }
  }
  render() {
    const { tab } = this.state;
    return (
      <div>
        <Tabs tab={tab} changeTab={this.changeTab} />
        {this.getTabContent()}
      </div>
    );
  }
}

export default dashboard;
