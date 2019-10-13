import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import jMoment from "jalali-moment";
import moment from "moment";
import Link from "next/link";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getFormattedDate(date) {
    return jMoment(new Date(date))
      .locale("fa")
      .format("YYYY/MM/DD");
  }
  getDuration(startDate, endDate) {
    return moment(endDate).diff(moment(startDate), "days") + 1;
  }
  render() {
    const { product } = this.props;
    return (
      <div className="product-item-container d-flex flex-column justify-content-center align-items-center">
        <div className="w-100">
          <img
            src={product.image}
            alt={product.name + " image"}
            className="product-item-image"
            width="100%"
          />
        </div>
        <div className="product-item-title d-flex flex-column p-3 justify-content-center align-items-center w-75">
          <div>
            <i className="mx-2 far fa-map-marker-alt text-second"></i>
            <span className="mx-2 text-main">{product.name}</span>
          </div>
          <hr className="bg-muted w-100 h-100" />
          <div>
            <div className="text-danger">
              <i className="far fa-plane-departure mx-2 text-second"></i>
              <span className="mx-2 text-muted">
                {this.getFormattedDate(product.start)}
              </span>
            </div>
            <div className="text-right">
              {/* <span className="text-muted mx-2"> . . .</span> */}
            </div>
            <div>
              <i className="far fa-plane-arrival mx-2 text-second"></i>
              <span className="mx-2 text-muted">
                {this.getFormattedDate(product.end)}
              </span>
            </div>
          </div>
        </div>
        <Container className="product-item-body text-right rtl d-flex flex-column p-3">
          <div className="d-flex justify-content-start">
            <div className="pl-2 d-flex">
              <div>
                <i className="far fa-clock ml-2"></i>
                <span className="ml-2">
                  {this.getDuration(product.start, product.end)}
                </span>
                <span className="mx-2">روز</span>
              </div>
              <span className="text-muted mx-2 border-left"></span>
              <div>
                <i className="far fa-user mx-2"></i>
                <span className="mx-2 text-muted">{product.leader}</span>
              </div>
            </div>
          </div>
          <hr className="bg-muted h-100 w-100" />
          <div className="product-description text-dark">
            <span>{product.description}</span>
          </div>
          <br />
          <div className="product-item-description text-dark">
            <p className="text-muted">
              ظرفیت باقیمانده <span className="text-second">20</span> نفر
            </p>
          </div>
          <br />
          <div>
            <Row>
              <Col className="d-flex flex-column product-item-price">
                <span className="text-muted">شروع قیمت از</span>
                <div>
                  <strong className="text-main mx-2">
                    {product.price.toLocaleString()}
                  </strong>
                  <span className="text-muted mx-2">تومان </span>
                </div>
              </Col>
              <Col className="product-item-action d-flex justify-content-center align-items-center">
                <Link href={`/product/${product.id}`}>
                  <a>
                    <Button>مشاهده</Button>
                  </a>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
