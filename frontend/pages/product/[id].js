import React, { Component, useState } from "react";
import Layout from "../../components/Layout";
import Details from "../../components/Product/Details";
import Gravity from "../../components/Product/Gravity";
import Glance from "../../components/Product/Glance";
import Map from "../../components/Product/Map";
import Tabs from "../../components/Product/Tabs";
import { Container, Row, Col } from "reactstrap";
import * as api from "../../src/api";
import Gallery from "../../components/Product/Gallery";
import Overview from "../../components/Product/Overview";
import Title from "../../components/Product/Title";
import Magazine from "../../components/Product/Magazine";
import Related from "../../components/Product/Related";
import _ from "lodash";
import Head from "next/head";

export default class Product extends Component {
  static async getInitialProps(context) {
    const {
      query: { id }
    } = context;
    const tours = await api.getTours();
    let tour = await api.getTourPage(id);
    if (tour == "no tour") {
      return { noTour: true };
    }
    tour.details = tour.Details.filter(item => item.type == 1);
    tour.images = tour.Details.filter(item => item.type == 2);
    tour.gravity = tour.Details.filter(item => item.type == 3);
    tour.glance = tour.Details.filter(item => item.type == 4);
    tour.map = tour.Details.find(item => item.type == 5);
    tour.tabs = tour.Details.filter(item => item.type == 6);
    tour.pdf = tour.Details.find(item => item.type == 7);

    const related = tour.Categories.map(category => {
      return category.Tours.map(tour => {
        return { id: tour.id, name: tour.name, image: tour.image };
      });
    });
    tour.related = [];
    related.forEach((item, index) => {
      tour.related = tour.related.concat(related[index]);
    });
    tour.related = _.uniqBy(tour.related, "id");
    tour.related = tour.related.filter(item => item.id != tour.id);
    delete tour.Details;
    return { tour, tours };
  }
  constructor(props) {
    super(props);
    this.state = {};
    if (props.tour != undefined) {
      this.state = { date: props.tour.Dates[0] };
    }
    this.changeDate = this.changeDate.bind(this);
  }
  changeDate(e) {
    this.setState({
      date: this.props.tour.Dates.find(item => item.id == e.target.value)
    });
  }
  noTour() {
    return (
      <Layout>
        <div className="text-center my-5 rtl">
          <i className="far fa-frown mx-2"></i>
          <span className="mx-2">متاسفانه هنوز این تور رو اضافه نکردیم</span>
        </div>
      </Layout>
    );
  }
  render() {
    const { tour, noTour } = this.props;
    const { date } = this.state;
    if (noTour) return this.noTour();
    return (
      <Layout>
        <Head>
          <title>بالهای آسمانی آیریا - {tour.name}</title>
        </Head>
        <Container className="py-3 rtl text-right">
          <Title tour={tour} />
          <Row className="mt-3">
            <Col sm={12} md={8} className="p-3 p-md-0 pl-md-2">
              <Gallery images={tour.images} date={date} />
            </Col>
            <Col sm={22} md={4} className="p-3 p-md-0 pr-md-2">
              <Overview tour={tour} date={date} changeDate={this.changeDate} />
            </Col>
          </Row>
          <Row className="my-3 my-md-5 p-3 p-md-0">
            <Gravity gravity={tour.gravity} />
          </Row>
          <Row className="my-3 my-md-5 p-3 p-md-0">
            <Details details={tour.details} />
          </Row>
          <Row className="my-3 my-md-5">
            <Col sm={12} md={8} className="p-3 p-md-0 pl-md-2">
              <Glance glance={tour.glance} />
            </Col>
            <Col sm={12} md={4} className="p-3 p-md-0 pr-md-2">
              <Map pdf={tour.pdf.data} map={tour.map.data} />
            </Col>
          </Row>
          <Row className="my-3 my-md-5 p-3 p-md-0">
            <Tabs tabs={tour.tabs} />
          </Row>
          <Row className="my-3 my-md-5 p-3 p-md-0">
            <Col
              className="pr-0 pl-2"
              style={{
                display: tour.Magazines.length ? "inline-block" : "none"
              }}
              sm={12}
              md={tour.related.length ? 6 : 12}
            >
              <Magazine
                magazine={tour.Magazines}
                relateds={tour.related.length}
              />
            </Col>
            <Col
              style={{
                display: tour.related.length ? "inline-block" : "none"
              }}
              sm={12}
              md={tour.Magazines.length ? 6 : 12}
            >
              <Related
                related={tour.related}
                magazines={tour.Magazines.length}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
