import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button } from "reactstrap";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "https://picsum.photos/300/200" };
  }

  render() {
    const { image } = this.state;
    return (
      <Layout>
        <Container className="p-2 rtl text-right">
          <div>
            <span className="product-title">تور استانبول مهر ۹۸</span>
            <span className="mx-2">-</span>
            <i className="text-muted far fa-clock mx-2"></i>
            <span className="text-muted mx-2">۳ روز</span>
          </div>
          <Row className="mt-5">
            <Col sm={12} md={8}>
              <img src={image} width="100%" />
              <Row className="my-2 py-2">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <Col key={index}>
                      <img
                        src={`https://picsum.photos/30${item}/20${item}`}
                        width="100%"
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col sm={12} md={4} className="d-flex flex-column">
              <div className="bg-dark d-flex flex-column rounded p-2">
                <span className="text-light m-2">
                  به راهنمایی سفر نیاز دارید ؟
                </span>
                <div className="d-flex m-2 justify-content-between">
                  <img
                    src={`https://picsum.photos/50`}
                    className="product-helper-image"
                  />
                  <div className="d-flex flex-column m-2 text-light">
                    <span>
                      سفر یار : <b>آقای کریمی</b>
                    </span>
                    <b className="product-helper-number">۲۰۰۰۰ - ۰۲۱</b>
                  </div>
                  <div className="display-4 text-muted d-flex justify-center-end align-items-center">
                    <i className="far fa-phone-square-alt"></i>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="product-price text-center d-flex-flex-column">
                    <span>شروع از <b>20,000</b> تومان</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
