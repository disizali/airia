import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export class Service extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1 };
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab(tab) {
    this.setState({ tab });
  }
  render() {
    const { tab } = this.state;
    return (
      <Container className="py-3">
        <Row className="rtl w-100 m-0">
          <Col
            className={`d-flex flex-column text-center rounded shadow-sm border p-3 mx-2 ${
              tab == 1 ? "bg-second text-light" : "text-dark bg-white"
            }`}
            onClick={() => this.changeTab(1)}
          >
            <i className="service-icon fas fa-plane"></i>
            <span className="mt-2">پرواز</span>
          </Col>
          <Col
            className={`d-flex flex-column text-center rounded shadow-sm border p-3 mx-2 ${
              tab == 2 ? "bg-second text-light" : "text-dark bg-white"
            }`}
            onClick={() => this.changeTab(2)}
          >
            <i className="service-icon fas fa-hotel"></i>
            <span className="mt-2">رزرواسیون هتل</span>
          </Col>
          <Col
            className={`d-flex flex-column text-center rounded shadow-sm border p-3 mx-2 ${
              tab == 3 ? "bg-second text-light" : "text-dark bg-white"
            }`}
            onClick={() => this.changeTab(3)}
          >
            <i className="service-icon fas fa-car"></i>
            <span className="mt-2">اجاره اتوموبیل</span>
          </Col>
          <Col
            className={`d-flex flex-column text-center rounded shadow-sm border p-3 mx-2 ${
              tab == 4 ? "bg-second text-light" : "text-dark bg-white"
            }`}
            onClick={() => this.changeTab(4)}
          >
            <i className="service-icon fas fa-passport"></i>
            <span className="mt-2">ویزا</span>
          </Col>
          <Col
            className={`d-flex flex-column text-center rounded shadow-sm border p-3 mx-2 ${
              tab == 5 ? "bg-second text-light" : "text-dark bg-white"
            }`}
            onClick={() => this.changeTab(5)}
          >
            <i className="service-icon fas fa-passport"></i>
            <span className="mt-2">خدمات CIP</span>
          </Col>
          <Col
            className={`d-flex flex-column text-center rounded shadow-sm border p-3 mx-2 ${
              tab == 6 ? "bg-second text-light" : "text-dark bg-white"
            }`}
            onClick={() => this.changeTab(6)}
          >
            <i className="service-icon fas fa-scroll"></i>
            <span className="mt-2">بیمه مسافرتی</span>
          </Col>
        </Row>
        <div className="bg-white shadow-sm rounded w-100 my-3 p-3 rtl text-right">
          تب شماره {tab} انتخاب شده
        </div>
      </Container>
    );
  }
}

export default Service;
