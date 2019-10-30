import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./Header";
import List from "./List";
import Ads from "./Ads";

export class Magazine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container>
          <Header posts={this.props.magazine.slice(0,5)} />
          <Row className="rtl text-right p-5">
            <Col sm={9}>
              <List posts={this.props.magazine.slice(5)} />
            </Col>
            <Col sm={3}>
              <Ads />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Magazine;
