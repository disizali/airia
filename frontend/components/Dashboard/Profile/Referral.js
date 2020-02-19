import React, { Component } from "react";
import { Container } from "reactstrap";
import UserContext from "../../UserContext";
import * as config from "../../../src/config";
export default class Referral extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="bg-white rounded w-100 shadow text-right rtl p-4 h-100  d-flex justify-content-center align-items-center flex-column">
        <div className="w-100 p-4 bg-primary shadow rounded text-light m-2 text-center d-flex">
          <span className="w-100 bg-transparent text-white border-none">
            {config.HOST}?referral={this.context.user.id}
          </span>
        </div>
        <p className="text-center text-muted m-2">
          با این لینک میتونید دوستان خودتون رو به آیریا دعوت کنید
        </p>
      </div>
    );
  }
}
