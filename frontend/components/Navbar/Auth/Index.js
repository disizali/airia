import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import Signin from "./Signin";
import Signup from "./Signup";

import Mobile from "./Mobile";

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.authFormToggle = this.authFormToggle.bind(this);
    this.contactToggle = this.contactToggle.bind(this);
    this.authMethodToggle = this.authMethodToggle.bind(this);
    this.state = {
      authOpen: false,
      contactOpen: false,
      authMethod: 1,
      signUp: false
    };
  }

  changeSignup(signUp) {
    this.setState({ signUp });
  }
  authFormToggle() {
    this.setState({
      authOpen: !this.state.authOpen
    });
  }
  contactToggle() {
    this.setState({
      contactOpen: !this.state.contactOpen
    });
  }

  authMethodToggle(authMethod) {
    this.setState({ authMethod });
  }

  render() {
    const { authOpen } = this.props;
    const { authMethod, signUp } = this.state;
    return (
      <Container className={`auth-panel ${authOpen ? "open" : ""}`}>
        <div className="auth-panel-toggles">
          <Row className="p-2">
            <Col className="m-3 d-flex justify-content-center align-items-center flex-column text-center p-2">
              <Row
                className={`panel-auth-toogle ${authMethod == 1 && "active"}`}
                onClick={() => this.authMethodToggle(1)}
              >
                <Col sm={12} className="my-1">
                  <img
                    src="/static/icons/email.svg"
                    className="flat-icon regular-icon"
                  />
                </Col>
                <Col sm={12} className="my-1">
                  <span>با رمز</span>
                </Col>
              </Row>
            </Col>
            <Col className="m-3 d-flex justify-content-center align-items-center flex-column text-center p-2">
              <Row
                className={`panel-auth-toogle ${authMethod == 2 && "active"}`}
                onClick={() => this.authMethodToggle(2)}
              >
                <Col sm={12} className="my-1">
                  <img
                    src="/static/icons/smartphone.svg"
                    className="flat-icon regular-icon"
                  />
                </Col>
                <Col sm={12} className="my-1">
                  <span>با تلفن</span>
                </Col>
              </Row>
            </Col>
          </Row>
          {authMethod == 1 ? (
            signUp ? (
              <Signup toggle={this.changeSignup.bind(this)} />
            ) : (
              <Signin toggle={this.changeSignup.bind(this)} />
            )
          ) : (
            <Mobile />
          )}
        </div>
      </Container>
    );
  }
}

export default Auth;
