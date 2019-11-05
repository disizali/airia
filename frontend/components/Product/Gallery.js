import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export class Gallery extends Component {
  constructor(props) {
    super(props);
    const images = JSON.parse(props.images[0].data);
    this.state = {
      cover: images[0],
      images
    };
    console.log(images);
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage(cover) {
    this.setState({ cover });
  }
  render() {
    const { cover, images } = this.state;
    const { date } = this.props;
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100 h-100"
      >
        <h3 className="box-title pr-3">پیش نمایش </h3>
        <img
          src={`/static/uploads/images/${cover}`}
          width="100%"
          className="rounded bg-danger"
        />
        <Row className="my-2 py-2 ltr gallery-row">
          <Col className="gallery-item">
            <img
              src={`/static/uploads/images/${images[0]}`}
              className="rounded"
              width="100%"
              // onClick={() => this.changeImage(images[0].data)}
            />
          </Col>
          {images.slice(1).map((item, index) => {
            return (
              <Col key={index} className="gallery-item">
                <img
                  src={`/static/uploads/images/${item}`}
                  className="rounded"
                  width="100%"
                  onClick={() => this.changeImage(item)}
                />
              </Col>
            );
          })}
        </Row>
        <Row className="my-2 py-2 w-100">
          <Col sm={6} className="mt-2">
            <i className="fad fa-plane-departure"></i>
            <span className="mx-2">شهر مبدا :</span>
            <span className="mx-2">{date.origin}</span>
          </Col>
          <Col sm={6} className="mt-2">
            <i className="fad fa-plane-arrival"></i>
            <span className="mx-2">شهر مقصد :</span>
            <span className="mx-2">{date.destination}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-clock"></i>
            <span className="mx-2">رفت :</span>
            <span className="mx-2">{date.departure}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-clock"></i>
            <span className="mx-2">برگشت :</span>
            <span className="mx-2">{date.arrival}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-plane"></i>
            <span className="mx-2">رفت :</span>
            <span className="mx-2">{date.out}</span>
          </Col>
          <Col sm={6} className="mt-3">
            <i className="fad fa-plane"></i>
            <span className="mx-2">برگشت :</span>
            <span className="mx-2">{date.in}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gallery;
