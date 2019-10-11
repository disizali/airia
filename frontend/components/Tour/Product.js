import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, name } = this.props;
    return (
      <div className="product-list-item p-0">
        <img
          src={image}
          width="100%"
          alt={name}
          className="product-item-image"
        />
        <div className="product-item-title shadow d-flex justify-content-center align-items-center">
          <span className="text-dark">{name}</span>
        </div>
        <Container className="product-item-body d-flex flex-column justify-content-start text-right">
          <div className="d-flex flex-column product-item-details text-right rtl">
            <div>
              <i className="ml-2 far fa-plane-departure text-second"></i>
              <b className="text-dark">رفت : </b>
              <span className="mx-2">1398/7/25</span>
            </div>
            <div>
              <span
                className="text-secondary text-right"
                style={{ transform: "rotate(90deg)" }}
              >
                ...
              </span>
            </div>
            <div>
              <i className="ml-2 far fa-plane-departure text-second"></i>
              <b className="text-dark">برگشت : </b>
              <span className="mx-2">1398/7/27</span>
            </div>
          </div>
          <hr className="bg-muted h-100 w-100" />
          <span className="text-muted">توضیحات مربوط به این تور</span>
          <Row className="my-3 rtl justify-content-between">
            <Col
              className="d-flex align-items-center justify-content-center"
              sm={5}
            >
              <span className="mx-2 text-main">120,000</span>
              <span className="mx-2">تومان</span>
            </Col>
            <Col sm={4}>
              <button className="btn text-light product-item-button">
                ثبت نام
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Product;
