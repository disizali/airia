import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Icon from "../Icons";
import Domestic from "./Domestic";
import Foreign from "./Foreign";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1 };
  }
  changeTab(tab) {
    this.setState({ tab });
  }
  render() {
    const { tab } = this.state;
    return (
      <div className="categories">
        <Row className="d-flex justify-content-center align-items center text-center rtl">
          <Col sm={6} md={3} className="m-5 d-flex justify-content-center">
            <div
              className={`category d-flex flex-column ${tab == 1 && "active"}`}
              onClick={() => this.changeTab(1)}
            >
              <Icon
                icon="AZADI"
                className="flat-icon extra-large-icon mb-2"
                style={{ fill: tab == 1 ? "white" : "#6c757d" }}
              />
              <span
                className={`mt-2 ${tab == 1 ? "text-white" : "text-muted"}`}
              >
                تور داخلی
              </span>
            </div>
          </Col>
          <Col sm={6} md={3} className="m-5 d-flex justify-content-center">
            <div
              className={`category d-flex flex-column ${tab == 2 && "active"}`}
              onClick={() => this.changeTab(2)}
            >
              <Icon
                icon="EIFFEL"
                className="flat-icon extra-large-icon mb-2"
                style={{ fill: tab == 2 ? "white" : "#6c757d" }}
              />
              <span
                className={`mt-2 ${tab == 2 ? "text-white" : "text-muted"}`}
              >
                تور خارجی
              </span>
            </div>
          </Col>
        </Row>
        {tab == 1 && <Domestic />}
        {tab == 2 && <Foreign />}
      </div>
    );
  }
}
export default Categories;
