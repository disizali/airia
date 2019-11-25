import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

export class Success extends Component {
  state = { timer: 5 };
  componentDidMount() {
    setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({ timer: this.state.timer - 1 });
      }
    }, 1000);
  }

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
            className="d-flex flex-column text-light align-items-center d-flex justify-content-center"
          >
            <h5>پرداخت با موفقیت انجام شد</h5>
            <p>
              <span>بازگشت به صفحه اصلی در </span>
              <span> {this.state.timer} </span>
              <span>ثانیه</span>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Success;
