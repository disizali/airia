import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

export class Success extends Component {
  render() {
    return (
      <div className="d-flex verify-payment justify-content-center text-center my-5">
        <Row className="verify-card text-white rounded shadow rtl success">
          <Col
            sm={2}
            className="bg-dark  align-items-center d-flex justify-content-center"
          >
            <i className="far fa-smile display-4"></i>
          </Col>
          <Col
            sm={10}
            className="text-light align-items-center d-flex justify-content-center"
          >
            <h5>پرداخت با موفقیت انجام شد</h5>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Success;
