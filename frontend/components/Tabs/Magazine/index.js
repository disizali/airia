import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import Tabs from "./Tabs";

export class Magazine extends Component {
  constructor(props) {
    super(props);
    const tabs = [
      ...new Set(
        props.magazine.map(item => {
          return item.Tags[0].name;
        })
      )
    ];

    const posts = props.magazine.filter(item => {
      return item.Tags[0].id == 1;
    });

    this.state = { tab: 1, tabs, posts };
  }
  changeTab(tab) {
    this.setState({ tab });
    const posts = this.props.magazine.filter(item => {
      return item.Tags[0].id == tab;
    });
    this.setState({ posts });
  }
  render() {
    return (
      <div className="px-0 px-md-5 mx-5 rtl text-right">
        <Header posts={this.props.magazine.slice(0, 5)} />
        <Tabs
          tab={this.state.tab}
          tabs={this.state.tabs}
          changeTab={this.changeTab.bind(this)}
        />
        <List posts={this.state.posts} />
      </div>
    );
  }
}

export default Magazine;
