import React, { Component } from "react";

export class Tabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tab, tabs, changeTab } = this.props;
    return (
      <div>
        <h5>جدیدترین مطالب</h5>
        <div className="magazine-tabs-container bg-white rounded shadow w-100">
          {tabs.map((item, index) => {
            return (
              <a
                className={`magazin-tab-item ${index + 1 == tab && "active"}`}
                key={index}
                onClick={() => changeTab(index + 1)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
