import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export class Service extends Component {
  render() {
    return (
      <Container className="py-3">
        <Row className="rtl">
          <Col className={`d-flex flex-column text-muted text-center rounded shadow border bg-white p-3 mx-2 ${tab}`}>
            <i className="service-icon fas fa-plane"></i>
            <span className="mt-2">پرواز</span>
          </Col>
          <Col className={`d-flex flex-column text-muted text-center rounded shadow border bg-white p-3 mx-2 ${tab}`}>
            <i className="service-icon fas fa-hotel"></i>
            <span className="mt-2">رزرواسیون هتل</span>
          </Col>
          <Col className={`d-flex flex-column text-muted text-center rounded shadow border bg-white p-3 mx-2 ${tab}`}>
            <i className="service-icon fas fa-car"></i>
            <span className="mt-2">اجاره اتوموبیل</span>
          </Col>
          <Col className={`d-flex flex-column text-muted text-center rounded shadow border bg-white p-3 mx-2 ${tab}`}>
            <i className="service-icon fas fa-passport"></i>
            <span className="mt-2">ویزا</span>
          </Col>
          <Col className={`d-flex flex-column text-muted text-center rounded shadow border bg-white p-3 mx-2 ${tab}`}>
            <i className="service-icon fas fa-passport"></i>
            <span className="mt-2">خدمات CIP</span>
          </Col>
          <Col className={`d-flex flex-column text-muted text-center rounded shadow border bg-white p-3 mx-2 ${tab}`}>
            <i className="service-icon fas fa-scroll"></i>
            <span className="mt-2">بیمه مسافرتی</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Service;
