import React, { Component } from "react";

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.getTabBody = this.getTabBody.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(selected) {
    this.setState({ selected });
  }

  getTabBody() {
    const { tabs } = this.props;
    const { selected } = this.state;
    const tab = JSON.parse(tabs[selected].data);
    if (tab.type == "raw") {
      return tab.body;
    }
    if (tab.type == "list") {
      return (
        <ul>
          {tab.body.map((item, index) => {
            return (
              <li
                className="d-flex justify-content-start align-items-center"
                key={index}
              >
                <div className="d-flex justify-content-center align-items-center shadow">
                  {index + 1}
                </div>
                <b className="mx-2">{item.title}</b>
                <span className="mx-2">:</span>
                <span className="mx-2">{item.text}</span>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  render() {
    const { tabs } = this.props;
    const { selected } = this.state;
    return (
      <div className="product-tabs-container p-3 d-flex flex-column w-100">
        <div className="product-tabs-list d-flex justify-content-center align-items-center my-2 w-25">
          {tabs.map((item, index) => {
            const data = JSON.parse(item.data);
            return (
              <div
                key={index}
                className={`product-tab-item ${index == selected && "active"}`}
                onClick={() => this.changeSelected(index)}
              >
                {data.title}
              </div>
            );
          })}
        </div>
        <div className="product-body my-2 p-4">{this.getTabBody()}</div>
      </div>
    );
  }
}

export default Tabs;
