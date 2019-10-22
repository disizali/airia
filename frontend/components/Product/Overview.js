import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";

import moment from "moment";
import jMoment from "jalali-moment";
import persianJs from "persianjs";

export class Overview extends Component {
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

  render() {
    const { tour } = this.props;
    return (
      <div className="product-overview">
        <div className="bg-dark d-flex flex-column rounded p-2">
          <span className="text-light m-2">به راهنمایی سفر نیاز دارید ؟</span>
          <div className="d-flex m-2 justify-content-between">
            <img
              src={`https://picsum.photos/50`}
              className="product-helper-image"
            />
            <div className="d-flex flex-column m-2 text-light">
              <span>
                سفر یار : <b>{tour.leader}</b>
              </span>
              <b className="product-helper-number">۲۰۰۰۰ - ۰۲۱</b>
            </div>
            <div className="display-4 text-muted d-flex justify-center-end align-items-center">
              <i className="far fa-phone-square-alt"></i>
            </div>
          </div>
        </div>
        <div className="product-order mt-2 d-flex flex-column rounded">
          <div className="product-price text-center d-flex flex-column align-items-center justify-content-center">
            <span>
              شروع از <b>{tour.price.toLocaleString()}</b> تومان
            </span>
            <p>قیمت بر اساس یک نفر در اتاق دو تخته محاسبه شده است</p>
          </div>
          <Container className="p-5 product-order d-flex flex-column">
            <h5>فرم رزرو</h5>
            <Row className="my-3">
              <Col
                sm={1}
                className="d-flex justify-content-center align-items-center"
              >
                <i className="fad fa-calendar text-main"></i>
              </Col>
              <Col
                sm={3}
                className="d-flex justify-content-center align-items-center"
              >
                <span>تاریخ</span>
              </Col>
              <Col
                sm={7}
                className="d-flex justify-content-center align-items-center"
              >
                <select>
                  {tour.Dates.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {this.getJalaliDate(item.start)}{` - `}
                        {this.getJalaliDate(item.end)}
                      </option>
                    );
                  })}
                </select>
              </Col>
            </Row>
            {/* <Calendar
                    selectedDay={selectedDay}
                    onChange={setSelectedDay}
                    /> */}
            <Row className="my-3">
              <Col
                sm={1}
                className="d-flex justify-content-center align-items-center"
              >
                <i className="fad fa-bed text-main"></i>
              </Col>
              <Col
                sm={3}
                className="d-flex justify-content-center align-items-center"
              >
                <span>تعداد</span>
              </Col>
              <Col
                sm={7}
                className="d-flex justify-content-center align-items-center"
              >
                <input type="number" className="w-75" defaultValue={1} min={1} />
              </Col>
            </Row>
            <Button color="primary" className="my-3 form-control">
              رزرو
            </Button>
          </Container>
        </div>
      </div>
    );
  }
}

export default Overview;
