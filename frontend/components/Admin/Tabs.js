import React, { Component } from "react";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    const { selectedTab, changeTab } = this.props;
    return (
      <div className="dashboard-tabs">
        <h3 className="m3 mb-5">پنل مدیریت</h3>
        <ul>
          <li
            className={`my-3 py-2 ${selectedTab == 1 && "active"}`}
            onClick={() => changeTab(1)}
          >
            <i className="fas fa-route mx-2 tours" />
            <h6 className="d-inline-block mx-2">تور ها</h6>
          </li>
          <li
            className={`my-3 py-2 ${selectedTab == 2 && "active"}`}
            onClick={() => changeTab(2)}
          >
            <i className="fas fa-newspaper mx-2 newspaper" />
            <h6 className="d-inline-block mx-2">مجله</h6>
          </li>
        </ul>
      </div>
    );
  }
}
