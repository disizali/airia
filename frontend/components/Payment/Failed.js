import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

export class Failed extends Component {
  state = { timer: 5 };
  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

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
              className="d-flex flex-column text-light align-items-center d-flex justify-content-center"
            >
              <h5>پرداخت موفقیت امیز نبود</h5>
              <p>
                <span>بازگشت به صفحه اصلی در </span>
                <span> {this.state.timer} </span>
                <span>ثانیه</span>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Failed;
