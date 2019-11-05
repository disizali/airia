import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Icon from "../../Icons/Index";
import { Container } from "reactstrap";

export default class Parents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { parents, changeTab, tab } = this.props;
    return (
      <div className="parents">
        <Container>
          <Row className="d-flex text-center rtl">
            {parents.map((item, index) => {
              return (
                <Col
                  className={`category d-flex my-2 my-md-3 mx-1 mx-md-2 ${
                    tab == item.id ? "active" : ""
                  }`}
                  onClick={() => changeTab(item.id)}
                  key={index}
                >
                  <div
                    className={`d-flex m-1 m-md-5 text-right flex-column text-center`}
                  >
                    <Icon
                      icon={item.icon}
                      className="flat-icon extra-large-icon mb-2"
                      style={{ fill: tab == item.id ? "white" : "#6c757d" }}
                    />
                    <span
                      className={`mt-2 ${
                        tab == item.id ? "text-white" : "text-muted"
                      }`}
                    >
                      تور {item.name}
                    </span>
                  </div>
                  <div className="d-none d-md-inline-block">
                    <ul
                      className={`list-group list-group-flush ${
                        tab == item.id ? "text-white" : "text-muted"
                      }`}
                    >
                      {item.Categories.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="list-group-item bg-transparent"
                          >
                            تور {item.name}
                          </li>
                        );
                      })}
                      {index + 1 == parents.length && (
                        <li className="list-group-item bg-transparent">
                          تور های پاییز و زمستان ۹۸
                        </li>
                      )}
                    </ul>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
