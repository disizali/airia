import React, { Component } from "react";
import Parents from "./Parents";
import Body from "./Category";

export class Tour extends Component {
  constructor(props) {
    super(props);
    const parent = this.props.tours.find(parent => parent.id == 1);
    this.state = { tab: 1, subTab: 0, parent };
  }

  changeTab(tab) {
    const parent = this.props.tours.find(parent => parent.id == tab);
    this.setState({ tab, subTab: 0, parent });
  }
  
  changeSubTab(subTab) {
    this.setState({ subTab });
  }

  render() {
    const { tab, parent, subTab } = this.state;
    const { tours } = this.props;
    return (
      <section className="tour">
        <Parents
          parents={tours}
          changeTab={this.changeTab.bind(this)}
          tab={tab}
        />
        <Body
          parent={parent}
          tab={tab}
          subTab={subTab}
          changeSubTab={this.changeSubTab.bind(this)}
        />
      </section>
    );
  }
}

export default Tour;
