import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Icon from "../Icons";
import Domestic from "./Domestic";
import Foreign from "./Foreign";
import { Container } from "reactstrap";
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
        <Container>
          <Row className="d-flex justify-content-center align-items center text-center rtl">
            <Col className="my-5 d-flex justify-content-center">
              <div
                className={`category d-flex flex-column ${tab == 1 &&
                  "active"}`}
                onClick={() => this.changeTab(1)}
              >
                <Icon
                  icon="TREES"
                  className="flat-icon large-icon mb-2"
                  style={{ fill: tab == 1 ? "white" : "#6c757d" }}
                />
                <span
                  className={`mt-1 ${tab == 1 ? "text-white" : "text-muted"}`}
                >
                  تور طبیعت
                </span>
              </div>
            </Col>
            <Col className="my-5 d-flex justify-content-center">
              <div
                className={`category d-flex flex-column ${tab == 2 &&
                  "active"}`}
                onClick={() => this.changeTab(2)}
              >
                <Icon
                  icon="ONE"
                  className="flat-icon large-icon mb-2"
                  style={{ fill: tab == 2 ? "white" : "#6c757d" }}
                />
                <span
                  className={`mt-2 ${tab == 2 ? "text-white" : "text-muted"}`}
                >
                  تور یک روزه
                </span>
              </div>
            </Col>
            <Col className="my-5 d-flex justify-content-center">
              <div
                className={`category d-flex flex-column ${tab == 3 &&
                  "active"}`}
                onClick={() => this.changeTab(3)}
              >
                <Icon
                  icon="NINETEEN"
                  className="flat-icon large-icon mb-2"
                  style={{ fill: tab == 3 ? "white" : "#6c757d" }}
                />
                <span
                  className={`mt-3 ${tab == 3 ? "text-white" : "text-muted"}`}
                >
                  تور چند روزه
                </span>
              </div>
            </Col>
            <Col className="my-5 d-flex justify-content-center">
              <div
                className={`category d-flex flex-column ${tab == 4 &&
                  "active"}`}
                onClick={() => this.changeTab(4)}
              >
                <Icon
                  icon="AZADI"
                  className="flat-icon large-icon mb-2"
                  style={{ fill: tab == 4 ? "white" : "#6c757d" }}
                />
                <span
                  className={`mt-2 ${tab == 4 ? "text-white" : "text-muted"}`}
                >
                  تور داخلی
                </span>
              </div>
            </Col>
            <Col className="my-5 d-flex justify-content-center">
              <div
                className={`category d-flex flex-column ${tab == 5 &&
                  "active"}`}
                onClick={() => this.changeTab(5)}
              >
                <Icon
                  icon="EIFFEL"
                  className="flat-icon large-icon mb-2"
                  style={{ fill: tab == 5 ? "white" : "#6c757d" }}
                />
                <span
                  className={`mt-2 ${tab == 5 ? "text-white" : "text-muted"}`}
                >
                  تور خارجی
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        {tab == 1 && <Domestic />}
        {tab == 2 && <Foreign />}
      </div>
    );
  }
}
export default Categories;
