import React, { Component } from "react";
import Layout from "../../components/Layout";
import Details from "../../components/Product/Details";
import Gravity from "../../components/Product/Gravity";
import Glance from "../../components/Product/Glance";
import Map from "../../components/Product/Map";
import Tabs from "../../components/Product/Tabs";

import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

export default class Product extends Component {
  static async getInitialProps(context) {
    const {
      query: { id }
    } = context;
    let { data: tour } = await axios.get("http://localhost:3001/tours/" + id);
    tour.details = tour.Details.filter(item => item.type == 1);
    tour.images = tour.Details.filter(item => item.type == 2);
    tour.gravity = tour.Details.filter(item => item.type == 3);
    tour.glance = tour.Details.filter(item => item.type == 4);
    tour.map = tour.Details.filter(item => item.type == 5);
    tour.tabs = tour.Details.filter(item => item.type == 6);

    delete tour.Details;
    return { tour };
  }

  constructor(props) {
    super(props);
    this.state = { image: props.tour.images[0].data };
  }

  render() {
    const { image } = this.state;
    const { tour } = this.props;
    return (
      <Layout>
        <Container className="py-5 rtl text-right">
          <div>
            <span className="product-title">تور استانبول مهر ۹۸</span>
            <span className="mx-2">-</span>
            <i className="text-muted far fa-clock mx-2"></i>
            <span className="text-muted mx-2">۳ روز</span>
          </div>
          <Row className="mt-5">
            <Col sm={12} md={8}>
              <img src={image} width="100%" className="rounded" />
              <Row className="my-2 py-2">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <Col key={index}>
                      <img
                        src={`https://picsum.photos/30${item}/20${item}`}
                        className="rounded"
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
              <div className="product-overview mt-2 d-flex flex-column rounded">
                <div className="product-price text-center d-flex flex-column align-items-center justify-content-center">
                  <span>
                    شروع از <b>20,000</b> تومان
                  </span>
                  <p>قیمت بر اساس یک نفر در اتاق دو تخته محاسبه شده است</p>
                </div>
                <Container className="p-5 product-order d-flex flex-column text-right">
                  <h5>فرم رزرو</h5>
                  <div>
                    <i className="ml-2 fad fa-calendar text-main"></i>
                    <span className="mx-2">تاریخ</span>
                  </div>
                  <div>
                    <i className="ml-2 fad fa-bed text-main"></i>
                    <span className="mx-2">تعداد</span>
                  </div>
                  <Button color="primary" className="form-control">
                    رزرو
                  </Button>
                </Container>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col sm={12} md={8}>
              <Gravity gravity={tour.gravity} />
            </Col>
            <Col sm={12} md={4} className="d-flex flex-column">
              <Details details={tour.details} />
            </Col>
          </Row>
          <Row className="my-5">
            <Col sm={12} md={8}>
              <Glance glance={tour.glance} />
            </Col>
            <Col sm={12} md={4}>
              <Map />
            </Col>
          </Row>
          <Row className="my-5">
            <Tabs tabs={tour.tabs} />
          </Row>
        </Container>
      </Layout>
    );
  }
}
