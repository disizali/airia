import React, { Component } from "react";

export class Mobile extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <input
          type="number"
          name="number"
          className="form-control my-2"
          placeholder="شماره موبایل"
        />
        <button className="btn btn-primary form-control rounded my-2">
          ورود
        </button>
      </div>
    );
  }
}

export default Mobile;
