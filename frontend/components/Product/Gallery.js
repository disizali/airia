import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    const images = JSON.parse(props.images[0].data);
    this.state = {
      cover: images[0],
      selectedImage: 0,
      images
    };
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage(index) {
    this.setState({ cover: this.state.images[index], selectedImage: index });
  }
  navigate(e) {
    const { images, selectedImage } = this.state;
    if (e.target.classList[1] == "btn-forward") {
      if (selectedImage < images.length - 1) {
        this.setState({
          selectedImage: selectedImage + 1,
          cover: images[selectedImage + 1]
        });
      } else {
        this.setState({
          selectedImage: 0,
          cover: images[0]
        });
      }
    } else {
      if (selectedImage == 0) {
        this.setState({
          selectedImage: images.length - 1,
          cover: images[images.length - 1]
        });
      } else {
        this.setState({
          selectedImage: selectedImage - 1,
          cover: images[selectedImage - 1]
        });
      }
    }
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
        <div className="d-inline-block position-relative">
          <img
            src={`/static/uploads/images/${cover}`}
            width="100%"
            className="rounded bg-danger"
          />
          <div className="bg-white shadow p-2 d-flex navigation-container align-items-center">
            <button
              className="btn-navigate btn-forward mx-2"
              onClick={this.navigate.bind(this)}
            >
              &lt;
            </button>
            <div className="navigation-splitter"></div>
            <button
              className="btn-navigate btn-backward mx-2"
              onClick={this.navigate.bind(this)}
            >
              &gt;
            </button>
          </div>
        </div>
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
                  onClick={() => this.changeImage(index+1)}
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
