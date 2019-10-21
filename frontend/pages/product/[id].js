import React, { Component, useState } from "react";
import Layout from "../../components/Layout";
import Details from "../../components/Product/Details";
import Gravity from "../../components/Product/Gravity";
import Glance from "../../components/Product/Glance";
import Map from "../../components/Product/Map";
import Tabs from "../../components/Product/Tabs";

import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Gallery from "../../components/Product/Gallery";
import Overview from "../../components/Product/Overview";

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
  }

  render() {
    const { tour } = this.props;
    return (
      <Layout>
        <Container className="py-5 rtl text-right">
          <div>
            <span className="product-title">تور {tour.name}</span>
            {/* <span className="mx-2">-</span> */}
            {/* <i className="text-muted far fa-clock mx-2"></i> */}
            {/* <span className="text-muted mx-2">۳ روز</span> */}
          </div>
          <Row className="mt-5">
            <Col sm={12} md={8}>
              <Gallery images={tour.images} />
            </Col>
            <Col sm={12} md={4} className="d-flex flex-column">
              <Overview tour={tour} />
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
