import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, item } = this.props;
    return (
      <div className="product-item-container d-flex flex-column justify-content-center align-items-center">
        <div className="product-image-container w-100">
          <img
            src={`https://picsum.photos/20${item}`}
            alt={item + " image"}
            className="product-item-image"
            width="100%"
          />
        </div>
        <div className="product-item-title d-flex justify-content-center align-items-center w-75">
          <span>Product {item}</span>
        </div>
        <Container className="product-item-body text-right rtl d-flex flex-column p-2">
          <div></div>
          <div className="d-flex">
            <div className="border-left pl-2 d-flex-flex-column">
              <div>
                <i className="far fa-clock mx-2"></i>
                <span className="mx-2 text-muted">3 روز</span>
              </div>
              <span className="text-muted mx-2">...</span>
              <span className=""></span>
              <div>
                <i className="far fa-user mx-2"></i>
                <span className="mx-2 text-muted">لیدر {item}</span>
              </div>
            </div>
            <div>
              <div>
                <i className="far fa-plane-departure mx-2 text-second"></i>
                <b className="mx-2 text-dark">رفت : </b>
                <span className="mx-2 text-muted">2019/5/1</span>
              </div>
              <div className="text-right">
                <span className="text-muted mx-2"> . . .</span>
              </div>
              <div>
                <i className="far fa-plane-arrival mx-2 text-second"></i>
                <b className="mx-2 text-dark">برگشت : </b>
                <span className="mx-2 text-muted">2019/5/3</span>
              </div>
            </div>
          </div>
          <hr className="bg-muted h-100 w-100" />
          <div className="product-description text-dark">
            <span>توضیحات این محصول</span>
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
                    {Math.floor(Math.random() * 100)},000
                  </strong>
                  <span className="text-muted mx-2">تومان </span>
                </div>
              </Col>
              <Col className="product-item-action d-flex justify-content-center align-items-center">
                <Button>ثبت نام</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Product;
