import React, { Component } from "react";

export class Email extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <input
          type="text"
          name="email"
          className="form-control my-2"
          placeholder="ایمیل / نام کاربری"
        />
        <input
          type="password"
          name="password"
          className="form-control my-2"
          placeholder="رمز عبور"
        />
        <button className="btn btn-primary form-control rounded my-2">
          ورود
        </button>
      </div>
    );
  }
}

export default Email;
