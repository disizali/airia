import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import UserContext from "../UserContext";
import { Row, Col } from "reactstrap";
import jMoment from "jalali-moment";
import persianJs from "persianjs";
import Link from "next/link";
export default class Favorites extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
  }
  getJalaliDate(date) {
    return this.getPersian(
      jMoment(new Date(date))
        .locale("fa")
        .format("D MMMM")
    );
  }

  getPersian(data) {
    return persianJs(data)
      .englishNumber()
      .toString();
  }

  render() {
    const {
      user: { Reserves: reserves }
    } = this.context;
    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4">
        <div className="d-flex justify-content-between">
          <h5>
            <i className="fal fa-history text-second mx-2"></i>
            <span className="mx-2 text-second">
              تاریخچه خرید های خودتون رو اینجا ببینید
            </span>
          </h5>
        </div>
        <div className="my-3">
          {reserves.length == 0 && (
            <span className="text-muted">شما هنوز خریدی انجام نداده اید .</span>
          )}
          {reserves.map((item, index) => {
            return (
              <div
                className="bg-second text-white rounded shadow p-3 my-3"
                key={index}
              >
                <Row className="rtl">
                  <Col sm={1}>{index + 1}</Col>
                  <Col>{item.Date.Tour.name}</Col>
                  <Col>{this.getPersian(item.Date.Tour.price.toLocaleString())}</Col>
                  <Col>
                    {this.getJalaliDate(item.Date.start)}
                    <span> تا </span>
                    {this.getJalaliDate(item.Date.end)}
                  </Col>
                  <Col className="float-left">
                    <Link href={`/product/${item.Date.Tour.id}`}>
                      <a className="text-white">
                        <span className="mx-2">مشاهده تور</span>
                        <i className="fad fa-arrow-circle-left mx-2"></i>
                      </a>
                    </Link>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}
