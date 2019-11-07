import React, { Component } from "react";
import Account from "./Account";
import Referral from "./Referral";

import { Container, Row, Col } from "reactstrap";

export class Profile extends Component {
  render() {
    return (
      <Container className="w-100 p-md-0">
        <Row className="m-0 w-100 p-0 rtl">
          <Col sm={12} md={8} className="p-0 pl-md-2 mb-1 my-md-0">
            <Account />
          </Col>
          <Col sm={12} md={4} className="p-0 pr-md-2 mt-1 my-md-0">
            <Referral />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
