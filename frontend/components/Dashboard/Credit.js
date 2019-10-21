import React, { Component } from "react";
import { Container, Button } from "reactstrap";
export default class Credit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4">
        <div className="d-flex justify-content-between">
          <h5>
            <i className="fal fa-wallet text-second mx-2"></i>
            <span className="mx-2 text-second">کیف پول خود را شارژ کنید</span>
          </h5>
          <div>
            <span className="text-muted mx-2">موجودی فعلی : </span>
            <span className="text-second mx-2">0</span>
            <span className="text-muted mx-2">تومان</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-muted my-5">
            با شارژ موجودی حساب خود می‌توانید با سرعت و سهولت بیشتری خرید کنید.
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <input type="number" className="form-control mx-2" placeholder="مبلغ شارژ"/>
            <Button color="warning" className="w-50 mx-2">شارژ حساب</Button>
          </div>
        </div>
      </Container>
    );
  }
}
