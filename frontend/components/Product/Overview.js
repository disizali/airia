import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
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
import { isNumber } from "util";

export class Overview extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { modal: false, reserveModal: false, total: 0 };
    this.toggleModal = this.toggleModal.bind(this);
    this.getReserveButton = this.getReserveButton.bind(this);
    this.goToReservePage = this.goToReservePage.bind(this);
    this.toggleReserveModal = this.toggleReserveModal.bind(this);
    this.getLowestPrice = this.getLowestPrice.bind(this);
    this.handleDateChanges = this.handleDateChanges.bind(this);
    this.handleUltimateReserve = this.handleUltimateReserve.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  handleDateChanges(e) {
    const { changeDate } = this.props;
    changeDate(e);
    let newState = {};
    Object.entries(this.state).forEach(item => {
      if (!item[0].startsWith("row")) {
        newState[[item[0]]] = item[1];
      } else {
        newState[[item[0]]] = undefined;
      }
    });
    this.setState({ ...newState, total: 0 });
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
  getLowestPrice() {
    let lowestPrice = 100000000;
    const { date } = this.props;
    date.hotelsData.slice(1).forEach(row => {
      row.forEach(col => {
        if (isNumber(col)) {
          if (col < lowestPrice) {
            lowestPrice = col;
          }
        }
      });
    });
    return lowestPrice.toLocaleString();
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
  toggleReserveModal() {
    const { reserveModal } = this.state;
    this.setState({ reserveModal: !reserveModal });
  }
  getReserveButton() {
    return (
      <Button
        className="my-3 form-control reserve-button"
        onClick={this.toggleReserveModal}
      >
        رزرو
      </Button>
    );
  }
  increase(item, price) {
    const value = this.state[item] == undefined ? 0 : this.state[item];
    this.setState({ [item]: value + 1, total: this.state.total + price });
  }
  decrease(item, price) {
    const value =
      this.state[item] == undefined
        ? 1
        : this.state[item] == 0
        ? 1
        : this.state[item];
    this.setState({
      [item]: value - 1,
      total:
        this.state.total != 0 && this.state[item] != 0
          ? this.state.total - price
          : this.state.total
    });
  }
  handleUltimateReserve() {
    const { status } = this.context;
    if (status == -1) {
      return this.toggleModal();
    }
    const { total } = this.state;
    if (total == 0) {
      alert("لطفا گزینه های مد نظر خودتون رو انتخاب کنید");
    }
    this.goToReservePage();
  }

  async goToReservePage() {
    const { tour, date } = this.props;
    const { total } = this.state;
    const { user } = this.context;
    let codes = [];
    Object.entries(this.state).forEach(item => {
      if (item[0].startsWith("row")) {
        codes.push({ [item[0]]: item[1] });
      }
    });
    if (1 > date.Capacity.count) {
      return alert("متاسفانه ظرفیت مورد نظر شما وجود ندارد");
    }
    const data = await api.makeReservePayment(
      {
        MerchantID: "xxx-xxxx-xxxxx-xxxx-xxx-xxxx-xxxx-xx",
        Amount: total,
        codes: JSON.stringify(codes),
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
    const { tour, date } = this.props;
    const { reserveModal, total } = this.state;
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
                شروع از <b>{this.getPersian(this.getLowestPrice())}</b> تومان
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
                    onChange={this.handleDateChanges.bind(this)}
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
        <Modal
          isOpen={reserveModal}
          toggle={this.toggleReserveModal}
          className="rtl text-right reserve-modal"
          style={{ maxWidth: "75% !important" }}
        >
          <h5 className="m-3">رزرو</h5>
          <ModalBody>
            <Table responsive striped>
              <thead>
                <tr>
                  {date.hotelsData[0].map((item, index) => {
                    return <th key={index}>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {date.hotelsData.slice(1).map((hotel, hotelIndex) => {
                  return (
                    <tr key={hotelIndex}>
                      {hotel.map((item, itemIndex) => {
                        if (isNumber(item)) {
                          return (
                            <td key={itemIndex} className="price text-center">
                              <div>
                                <strong className="ml-2">
                                  {item.toLocaleString()}
                                </strong>
                                <div className="reserveButtons">
                                  <button
                                    onClick={() =>
                                      this.increase(
                                        `row${hotelIndex}_col${itemIndex}`,
                                        item
                                      )
                                    }
                                  >
                                    <i className="fa fa-sort-up" />
                                  </button>
                                  <span>
                                    {this.state[
                                      `row${hotelIndex}_col${itemIndex}`
                                    ] || 0}
                                  </span>
                                  <button
                                    onClick={() =>
                                      this.decrease(
                                        `row${hotelIndex}_col${itemIndex}`,
                                        item
                                      )
                                    }
                                  >
                                    <i className="fa fa-sort-down" />
                                  </button>
                                </div>
                              </div>
                            </td>
                          );
                        }
                        return <td key={itemIndex}>{item}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-between">
            <div>
              <span>جمع خرید : </span>
              <span className="text-primary">
                {this.state.total.toLocaleString()}
              </span>
              <span>تومان </span>
            </div>
            <div>
              <button
                className="btn btn-link bg-transparent text-secondary ml-2"
                onClick={this.toggleReserveModal}
              >
                خروج
              </button>
              <Button
                color="primary"
                onClick={this.handleUltimateReserve}
                disabled={total == 0 ? true : false}
              >
                نهایی کردن رزرو
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Overview;
