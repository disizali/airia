import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import moment from "moment";
import jMoment from "jalali-moment";
import persianJs from "persianjs";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { date: props.product.Dates[0] };
    this.changeDate = this.changeDate.bind(this);
  }
  changeDate(date) {
    this.setState({
      date: this.props.product.Dates.find(item => item.id == date)
    });
  }
  getJalaliDate(date) {
    return this.getPersian(
      jMoment(new Date(date))
        .locale("fa")
        .format("D MMMM")
    );
  }
  getDuration(startDate, endDate) {
    return this.getPersian(moment(endDate).diff(moment(startDate), "days") + 1);
  }

  getPersian(data) {
    return persianJs(data)
      .englishNumber()
      .toString();
  }
  componentDidMount() {
    const simpleParallax = require("simple-parallax-js");
    var image = document.getElementsByClassName("product-item-image");
    new simpleParallax(image, {
      delay: 0,
      orientation: "down",
      scale: 1.3,
      overfow: false
    });
  }
  render() {
    const { product } = this.props;
    const { date } = this.state;
    return (
      <div
        className="product-item-container d-flex flex-column justify-content-center align-items-center w-100"
        style={{ overflow: "hidden" }}
      >
        <div style={{ overflow: "hidden" }}>
          <img
            // src={product.image}
            src={`/static/uploads/images/${product.image}`}
            alt={product.name + " image"}
            className="product-item-image"
            width="100%"
          />
        </div>
        <div className="product-item-title d-flex flex-column p-2 justify-content-center align-items-center w-75">
          <div>
            <i className="mx-2 far fa-map-marker-alt text-second"></i>
            <span className="mx-2 text-main">{product.name}</span>
          </div>
        </div>
        <Container className="product-item-body text-right rtl d-flex flex-column px-3 pt-2 pb-3">
          <div className="product-item-body-row d-flex mt-4 w-100">
            <div
              className="d-flex flex-column border-left"
              style={{ width: "30%" }}
            >
              <div>
                <i
                  className="far fa-plane-departure mx-1 text-second"
                  style={{ transform: `scaleX(-1)` }}
                ></i>
                <span className="product-item-date mx-1 text-main">
                  {this.getJalaliDate(date.start)}
                </span>
              </div>
              <div>
                <i
                  className="far fa-plane-arrival mx-1 text-second"
                  style={{ transform: `scaleX(-1)` }}
                ></i>
                <span className="product-item-date mx-1 text-main">
                  {this.getJalaliDate(date.end)}
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center other-dates text-muted">
              <i className="far fa-calendar-day mx-2 text-muted"></i>
              <span className="mx-1">تاریخ های دیگر این تور</span>
              <i className="far fa-arrow-down mx-1"></i>
              <div className="other-dates-body">
                <ul className={`p-0 list-group list-group-flush text-muted`}>
                  {product.Dates.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="m-0 list-group-item list-group-item-action"
                        onMouseEnter={() => this.changeDate(item.id)}
                      >
                        {this.getJalaliDate(item.start)} -{" "}
                        {this.getJalaliDate(item.end)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="product-item-body-row mt-3">
            <div className="d-flex w-100">
              <div className="border-left" style={{ width: "30%" }}>
                <i className="far fa-clock mx-1 text-muted"></i>
                <span className="ml-2 text-muted">
                  {this.getDuration(date.start, date.end)}
                </span>
                <span className="mx-1 text-muted">روز</span>
              </div>
              {/* <div style={{ width: "30%" }}>
                <i className="far fa-user mx-2"></i>
                <span className="mx-2 text-muted">{product.leader}</span>
              </div> */}
              <div>
                <i className="far fa-users mx-2 text-muted"></i>
                <span className="mx-1 text-muted">
                  ظرفیت باقی مانده :
                  <span className="text-second mx-1">
                    {date.Capacity.count
                      ? this.getPersian(date.Capacity.count)
                      : 0}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr className="bg-muted h-100 w-100" />
          <div className="product-item-body-row product-description text-dark">
            <span>{product.description}</span>
          </div>
          <br />
          {/* <div className="product-item-body-row product-item-description text-dark">
            <p className="text-muted">
              ظرفیت باقیمانده
              <span className="text-second mx-2">
                {this.getPersian(date.Capacity.count)}
              </span>
              نفر
            </p>
          </div> */}
          <div className="product-item-body-row">
            <Row>
              <Col className="d-flex flex-column product-item-price">
                <span className="text-muted">شروع از</span>
                <div>
                  <strong className="text-main mx-2">
                    {this.getPersian(date.price.toLocaleString())}
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
