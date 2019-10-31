import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { images } = this.props;
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100 h-100"
      >
        <h3 className="box-title pr-3">گالری</h3>
        <img src={images[0].data} width="100%" className="rounded bg-danger" />
        <Row className="my-2 py-2">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <Col key={index}>
                <img
                  src={`https://picsum.photos/seed/item${item}/150/100`}
                  className="rounded"
                  width="100%"
                />
              </Col>
            );
          })}
        </Row>
        <Row className="my-2 py-2">
          {[5, 6, 7, 8].map((item, index) => {
            return (
              <Col key={index}>
                <img
                  src={`https://picsum.photos/seed/item${item}/150/100`}
                  className="rounded"
                  width="100%"
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Gallery;
