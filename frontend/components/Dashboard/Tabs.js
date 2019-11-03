import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import UserContext from "../UserContext";
export class Tabs extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
  }
  render() {
    const { tab, changeTab } = this.props;
    const { logout } = this.context;
    return (
      <Container className="rtl my-3">
        <Row className="bg-white shadow py-4 rounded justify-content-start text-center">
          <Col
            className={`border-left dashboard-tab ${tab == "profile" && `active`}`}
            onClick={() => changeTab("profile")}
            sm={2}
          >
            <i className="fad fa-user mx-2"></i>
            <span className="mx-2">پروفایل</span>
          </Col>
          <Col
            sm={2}
            className={`border-left dashboard-tab ${tab == "credit" && `active`}`}
            onClick={() => changeTab("credit")}
          >
            <i className="fad fa-wallet mx-2"></i>
            <span className="mx-2">افزایش اعتبار</span>
          </Col>
          <Col
            sm={2}
            className={`border-left dashboard-tab ${tab == "favorites" && `active`}`}
            onClick={() => changeTab("favorites")}
          >
            <i className="fad fa-heart mx-2"></i>
            <span className="mx-2">علایق</span>
          </Col>
          <Col
            sm={2}
            className={` dashboard-tab ${tab == "history" && `active`}`}
            onClick={() => changeTab("history")}
          >
            <i className="fad fa-history mx-2"></i>
            <span className="mx-2">تاریخچه خرید</span>
          </Col>
          <Col
            sm={4}
            className={`d-flex justify-content-end align-items-center dashboard-tab text-danger`}
            onClick={logout}
          >
            <i className="fad fa-sign-in-alt mx-2"></i>
            <span className="mx-2">خروج</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tabs;
