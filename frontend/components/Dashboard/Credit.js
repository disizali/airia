import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import axios from "axios";
import UserContext from "../UserContext";

export default class Credit extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { credit: 1000 };
    this.handleCreditChanges = this.handleCreditChanges.bind(this);
    this.goToPaymentPage = this.goToPaymentPage.bind(this);
    this.calculateCredit = this.calculateCredit.bind(this);
  }

  handleCreditChanges(e) {
    this.setState({ credit: e.target.value });
  }

  calculateCredit() {
    const { user } = this.context;
    if (user != null) {
      const credits = user.Credits;
      const total = credits.reduce((total, currentValue, currentIndex) => {
        if (currentValue.type) {
          return +total + +currentValue.amount;
        } else if (!currentValue.type) {
          return +total - +currentValue.amount;
        }
      }, 0);
      return total;
    }
  }

  async goToPaymentPage() {
    const { user } = this.context;
    const { credit } = this.state;
    const { data } = await axios.post("http://localhost:3001/payment/credit", {
      MerchantID: "xxx-xxxx-xxxxx-xxxx-xxx-xxxx-xxxx-xx",
      Amount: credit,
      CallbackURL: `http://localhost:3000/dashboard/credit/result`,
      Description: `افزودن اعتبار`,
      UserId: user.id
    });
    if (data == "wrong data") {
      return alert("خطایی رخ داده است . هم اکنون در صدد رفع مشکل هستیم");
    }
    window.location.href = `https://sandbox.zarinpal.com/pg/transaction/pay/${Number(
      data.Authority
    )}`;
  }

  render() {
    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4">
        <div className="d-flex justify-content-between">
          <h5>
            <i className="fal fa-wallet text-second mx-2"></i>
            <span className="mx-2 text-second">کیف پولتون رو شارژ کنید</span>
          </h5>
          <div>
            <span className="text-muted mx-2">موجودی فعلی : </span>
            <span className="text-second mx-2">
              {this.calculateCredit().toLocaleString()}
            </span>
            <span className="text-muted mx-2">تومان</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-muted my-5">
            با شارژ موجودی حساب خود می‌توانید با سرعت و سهولت بیشتری خرید کنید.
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="number"
              className="form-control mx-2"
              placeholder="مبلغ شارژ"
              min={1000}
              value={this.state.credit}
              onChange={this.handleCreditChanges}
            />
            <Button
              color="warning"
              className="w-75 mx-2"
              onClick={this.goToPaymentPage}
            >
              شارژ حساب
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
