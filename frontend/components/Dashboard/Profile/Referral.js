import React, { Component } from "react";
import { Container } from "reactstrap";
export default class Referral extends Component {
  render() {
    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4 h-100  d-flex justify-content-center align-items-center flex-column">
        <span className="w-100 p-4 bg-primary shadow rounded text-light m-2">
          http://airiatravel.com/?referral=2552
        </span>
        <p className="text-center text-muted m-2">با این لینک میتونید دوستان خودتون رو به آیریا دعوت کنید</p>
      </Container>
    );
  }
}