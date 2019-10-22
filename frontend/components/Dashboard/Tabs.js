import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export class Tabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tab, changeTab } = this.props;
    return (
      <Container className="rtl my-3">
        <Row className="bg-white shadow py-4 rounded justify-content-start text-center">
          <Col
            className={`border-left dashboard-tab ${tab == 1 && `active`}`}
            onClick={() => changeTab(1)}
            sm={2}
          >
            <i className="fad fa-user mx-2"></i>
            <span className="mx-2">پروفایل</span>
          </Col>
          <Col
            sm={2}
            className={`border-left dashboard-tab ${tab == 2 && `active`}`}
            onClick={() => changeTab(2)}
          >
            <i className="fad fa-wallet mx-2"></i>
            <span className="mx-2">افزایش اعتبار</span>
          </Col>
          <Col
            sm={2}
            className={`border-left dashboard-tab ${tab == 3 && `active`}`}
            onClick={() => changeTab(3)}
          >
            <i className="fad fa-heart mx-2"></i>
            <span className="mx-2">علایق</span>
          </Col>
          <Col
            sm={2}
            className={`dashboard-tab ${tab == 4 && `active`}`}
            onClick={() => changeTab(4)}
          >
            <i className="fad fa-history mx-2"></i>
            <span className="mx-2">تاریخچه خرید</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tabs;
