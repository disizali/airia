import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: props.images[0].data
    };
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage(cover) {
    this.setState({ cover });
  }
  render() {
    const { cover } = this.state;
    const { images, preview } = this.props;
    const data = JSON.parse(preview[0].data);
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100 h-100"
      >
        <h3 className="box-title pr-3">پیش نمایش </h3>
        <img src={cover} width="100%" className="rounded bg-danger" />
        <Row className="my-2 py-2 ltr gallery-row">
          <Col className="gallery-item">
            <img
              src={images[0].data}
              className="rounded"
              width="100%"
              onClick={() => this.changeImage(images[0].data)}
            />
          </Col>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <Col key={index} className="gallery-item">
                <img
                  src={`https://picsum.photos/seed/item${item}/800/445`}
                  className="rounded"
                  width="100%"
                  onClick={() =>
                    this.changeImage(
                      `https://picsum.photos/seed/item${item}/800/445`
                    )
                  }
                />
              </Col>
            );
          })}
        </Row>
        <Row className="my-2 py-2 w-100">
          <Col sm={6} className="mt-2">
            <i className="fad fa-plane-departure"></i>
            <span className="mx-2">شهر مبدا :</span>
            <span className="mx-2">{data.origin}</span>
          </Col>
          <Col sm={6} className="mt-2">
            <i className="fad fa-plane-arrival"></i>
            <span className="mx-2">شهر مقصد :</span>
            <span className="mx-2">{data.destination}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-clock"></i>
            <span className="mx-2">رفت :</span>
            <span className="mx-2">{data.departure}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-clock"></i>
            <span className="mx-2">برگشت :</span>
            <span className="mx-2">{data.arrival}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-plane"></i>
            <span className="mx-2">رفت :</span>
            <span className="mx-2">{data.out}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-plane"></i>
            <span className="mx-2">برگشت :</span>
            <span className="mx-2">{data.in}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gallery;
