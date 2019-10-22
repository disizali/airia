import React, { Component } from "react";
import Tabs from "./Tabs";
import Profile from "./Profile";
import Credit from "./Credit";
import Favorites from "./Favorites";
import History from "./History";
export class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1 };
    this.changeTab = this.changeTab.bind(this);
    this.getTabContent = this.getTabContent.bind(this);
  }

  changeTab(tab) {
    this.setState({ tab });
  }

  getTabContent() {
    switch (this.state.tab) {
      case 1:
        return <Profile user={this.props.user} />;
      case 2:
        return <Credit />;
      case 3:
        return <Favorites />;
      case 4:
        return <History />;
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
