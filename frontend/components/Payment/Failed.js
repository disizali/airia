import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

export class Failed extends Component {
  render() {
    return (
      <div>
        <div className="d-flex verify-payment justify-content-center text-center my-5">
          <Row className="verify-card text-white rounded shadow rtl failed">
            <Col
              sm={2}
              className="bg-dark  align-items-center d-flex justify-content-center"
            >
              <i className="far fa-frown display-4"></i>
            </Col>
            <Col
              sm={10}
              className="text-light align-items-center d-flex justify-content-center"
            >
              <h5>پرداخت موفقیت امیز نبود</h5>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Failed;
