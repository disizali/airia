import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Icon from "../../Icons";
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
                  className={`category my-5 mx-2 d-flex  ${tab == item.id &&
                    "active"}`}
                  onClick={() => changeTab(item.id)}
                  key={index}
                >
                  <div
                    className={`d-flex m-5 text-right flex-column text-center`}
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
                  <div>
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
