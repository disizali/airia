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
import Title from "../../components/Product/Title";
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
    tour.preview = tour.Details.filter(item => item.type == 7);
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
        <Container className="py-3 rtl text-right">
          <Title tour={tour} />
          <Row className="mt-3">
            <Col sm={12} md={8} className="pl-2 pr-0">
              <Gallery images={tour.images} preview={tour.preview}/>
            </Col>
            <Col sm={22} md={4} className="pl-0 pr-2">
              <Overview tour={tour} />
            </Col>
          </Row>
          <Row className="my-5">
            <Gravity gravity={tour.gravity} />
          </Row>
          <Row>
            <Details details={tour.details} />
          </Row>
          <Row className="my-5">
            <Col sm={12} md={8} className="pl-2 pr-0">
              <Glance glance={tour.glance} />
            </Col>
            <Col sm={12} md={4} className="pl-0 pr-2">
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
