import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import moment from "moment";
import jMoment from "jalali-moment";
import persianJs from "persianjs";
import jsCookie from "js-cookie";
import UserContext from "../UserContext";
import Signin from "../Navbar/Auth/Signin";
import * as config from "../../src/config";
import * as api from "../../src/api";
import Router from "next/router";

export class Overview extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { count: 1, modal: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.getReserveButton = this.getReserveButton.bind(this);
    this.goToReservePage = this.goToReservePage.bind(this);
    this.handleCountChanges = this.handleCountChanges.bind(this);
  }

  handleCountChanges(e) {
    const count = e.target.value;
    this.setState({ count: count > 20 ? 20 : count });
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
  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  getModal() {
    const { modal } = this.state;
    return (
      <Modal isOpen={modal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
          برای خرید این تور نیاز به ورود به سیستم دارید
        </ModalHeader>
        <ModalBody className="p-5">
          <Signin popup toggleModal={this.toggleModal} />
        </ModalBody>
      </Modal>
    );
  }

  getReserveButton() {
    const { status } = this.context;
    if (status == 1) {
      return (
        <Button
          className="my-3 form-control reserve-button"
          onClick={this.goToReservePage}
        >
          رزرو
        </Button>
      );
    }
    return (
      <div>
        <Button
          className="my-3 form-control reserve-button"
          onClick={this.toggleModal}
        >
          رزرو
        </Button>
      </div>
    );
  }

  async goToReservePage() {
    const { tour, date } = this.props;
    const { user } = this.context;
    const { count } = this.state;
    if (count > date.Capacity.count) {
      return alert("متاسفانه ظرفیت مورد نظر شما وجود ندارد");
    }
    const data = await api.makeReservePayment(
      {
        MerchantID: "xxx-xxxx-xxxxx-xxxx-xxx-xxxx-xxxx-xx",
        Amount: date.price * count,
        count,
        CallbackURL: `${config.HOST}/product/${tour.id}/reserve`,
        Description: `تور ${tour.name}`,
        UserId: user.id,
        DateId: date.id
      },
      {
        headers: {
          authorization: `Bearer ${jsCookie.get("authtoken")}`
        }
      }
    );
    if (data == "wrong data") {
      return alert("خطایی رخ داده است . هم اکنون در صدد رفع مشکل هستیم");
    } else if (data == "credit decrease") {
      alert("مبلغ از کیف پول شما کسر و تور برای شما رزرو شد");
      return Router.push("/dashboard/history");
    }
    window.location.href = `https://sandbox.zarinpal.com/pg/transaction/pay/${Number(
      data.Authority
    )}`;
  }
  render() {
    const { tour, date, changeDate } = this.props;
    const { count } = this.state;
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100 h-100 px-2"
      >
        <h3 className="box-title pr-3">خرید</h3>
        <div className="product-overview w-100">
          {this.getModal()}
          <div className="bg-dark d-flex flex-column rounded p-2">
            <span className="text-light m-2">به راهنمایی سفر نیاز دارید ؟</span>
            <div className="d-flex m-2 justify-content-between">
              <div className="d-flex flex-column m-2 text-light">
                <span>
                  سفر یار : <b>{tour.leader}</b>
                </span>
                <b className="product-helper-number">۵۷۸۹۲ - ۰۲۱</b>
              </div>
              <div className="display-4 text-muted d-flex justify-center-end align-items-center">
                <i className="far fa-phone-square-alt"></i>
              </div>
            </div>
          </div>
          <div className="product-order mt-2 d-flex flex-column rounded">
            <div className="product-price text-center d-flex flex-column align-items-center justify-content-center">
              <span>
                شروع از <b>{this.getPersian(date.price.toLocaleString())}</b>{" "}
                تومان
              </span>
              <p>قیمت بر اساس یک نفر در اتاق دو تخته محاسبه شده است</p>
            </div>
            <Container className="p-5 product-order d-flex flex-column bg-white">
              <h5 className="border-bottom pb-3">فرم رزرو</h5>
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
                  <select
                    className="w-100 overview-input"
                    value={date.id}
                    onChange={changeDate.bind(this)}
                  >
                    {tour.Dates.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {this.getJalaliDate(item.start)}
                          {` تا `}
                          {this.getJalaliDate(item.end)}
                        </option>
                      );
                    })}
                  </select>
                </Col>
              </Row>
              {date.Capacity.count ? (
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
                    <input
                      type="number"
                      className="w-100 overview-input"
                      value={count}
                      onChange={this.handleCountChanges}
                      min={1}
                      max={date.Capacity.count}
                    />
                  </Col>
                </Row>
              ) : (
                ""
              )}
              <Row>
                <span>
                  ظرفیت باقی مانده فقط
                  <strong className="text-danger mx-2">
                    {date.Capacity.count &&
                      this.getPersian(date.Capacity.count)}
                  </strong>
                  <span>نفر</span>
                </span>
              </Row>
              {date.Capacity.count ? this.getReserveButton() : ""}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
