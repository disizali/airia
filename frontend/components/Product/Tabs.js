import React, { Component } from "react";
import { Button } from "reactstrap";

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.getTabBody = this.getTabBody.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  changeSelected(selected) {
    this.setState({ selected });
  }

  changeMode(index) {
    this.setState({ [`full${index}`]: !this.state[`full${index}`] });
  }

  getTabBody() {
    const { tabs } = this.props;
    const { selected } = this.state;
    const tab = JSON.parse(tabs[selected].data);
    if (tab.type == "raw") {
      return <div dangerouslySetInnerHTML={{ __html: tab.body }} />;
    }
    if (tab.type == "list") {
      return (
        <ul>
          {tab.body.map((item, index) => {
            const fullMode = this.state["full" + index];
            return (
              <li
                className="d-flex flex-column"
                key={index}
                onClick={() => (item.full ? this.changeMode(index) : "")}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <strong className="d-flex justify-content-center align-items-center shadow px-2 py-1">
                      {index + 1}
                    </strong>
                    <b className="mx-2">{item.title}</b>
                    <span className="mx-2">:</span>
                    <span className="mx-2">{item.text}</span>
                  </div>
                  <Button
                    className="text-muted btn-link"
                    color="light"
                    style={{
                      display:
                        item.full != "" && item.full != undefined
                          ? "inline-block"
                          : "none"
                    }}
                  >
                    <span className="mx-2">{fullMode ? "بستن" : "بیشتر"}</span>
                    <i
                      className={`fas fa-sort-${fullMode ? "up" : "down"} mx-2`}
                    ></i>
                  </Button>
                </div>
                <div
                  className="border rounded p-3 m-1"
                  style={{
                    display: fullMode ? "block" : "none"
                  }}
                  dangerouslySetInnerHTML={{ __html: item.full }}
                ></div>
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
      <div className="box-container d-flex flex-column w-100 p-0">
        <div className="product-tabs-list d-flex justify-content-start align-items-center w-100 m-0">
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
        <div className="product-body p-4">{this.getTabBody()}</div>
      </div>
    );
  }
}

export default Tabs;
