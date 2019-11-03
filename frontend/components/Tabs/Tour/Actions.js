import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
export class Actions extends Component {
  render() {
    return (
      <Container>
        <Row className="my-5">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <Col key={index} sm={6} md={3}>
                <div className="action-container">
                  <img
                    src={`https://picsum.photos/seed/action${item}/200/100?blur`}
                    alt="service 1"
                    width="100%"
                    className="action-image"
                  />
                  <h4 className="action-title">خدمت شماره {item}</h4>
                </div>
              </Col>
            );
          })}
          {/* <Col>
            <div className="action-container">
              <img
                src="https://picsum.photos/seed/action1/200/100?blur"
                alt="service 1"
                className="action-image"
              />
              <h4 className="action-title">خدمت شماره 1</h4>
            </div>
          </Col>
          <Col>
            <div className="action-container">
              <img
                src="https://picsum.photos/seed/action2/200/100?blur"
                alt="service 2"
                className="action-image"
              />
              <h4 className="action-title">خدمت شماره 2</h4>
            </div>
          </Col>
          <Col>
            <div className="action-container">
              <img
                src="https://picsum.photos/seed/action3/200/100?blur"
                alt="service 3"
                className="action-image"
              />
              <h4 className="action-title">خدمت شماره 3</h4>
            </div>
          </Col>
          <Col>
            <div className="action-container">
              <img
                src="https://picsum.photos/seed/action4/200/100?blur"
                alt="service 4"
                className="action-image"
              />
              <h4 className="action-title">خدمت شماره 4</h4>
            </div>
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Actions;
