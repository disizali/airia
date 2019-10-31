import React, { Component } from "react";
import axios from "axios";
import validator from "validator";
import UserContext from "../../UserContext";
import Router from "next/router";
import jsCookie from "js-cookie";
export default class Signup extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "a.hassssani@gmail.com",
      phone: "09033033223",
      password: "123456789",
      repassword: "123456789",
      rules: false,
      newsletter: false
    };
    this.signUp = this.signUp.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.checkChangeHandler = this.checkChangeHandler.bind(this);
  }

  async signUp() {
    const { login } = this.context;

    const {
      email,
      phone,
      password,
      repassword,
      rules,
      newsletter
    } = this.state;
    const emailResult = validator.isEmail(email);
    const phoneResult = validator.isNumeric(phone);
    const passwordResult =
      validator.isNumeric(password) && password.length >= 8;
    const repasswordResult = repassword == password;
    if (
      emailResult &&
      phoneResult &&
      passwordResult &&
      repasswordResult &&
      rules
    ) {
      const { data } = await axios.post("http://localhost:3001/register", {
        email,
        phone,
        password
      });
      if (data == "duplicate") {
        return alert("این ایمیل قبلا استفاده شده است");
      }
      jsCookie.set("authtoken", data);
      const { data: user } = await axios.get("http://localhost:3001/profile", {
        headers: { authorization: `Bearer ${data}` }
      });
      Router.push("/dashboard");
      return login(user);
    }
    return alert("لطفا ورودی های خودتون رو چک کنید");
  }

  textChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  checkChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column rtl">
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.textChangeHandler}
          className="form-control my-2"
          placeholder="* ایمیل / نام کاربری"
        />
        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.textChangeHandler}
          className="form-control my-2"
          placeholder="* شماره تلفن"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.textChangeHandler}
          className="form-control my-2"
          placeholder="* رمز عبور"
        />
        <input
          type="password"
          name="repassword"
          value={this.state.repassword}
          onChange={this.textChangeHandler}
          className="form-control my-2"
          placeholder="* تکرار رمز عبور"
        />
        <div className="w-100 text-right">
          <input
            type="checkbox"
            name="rules"
            className="ml-2"
            onChange={this.checkChangeHandler}
          />
          <span className="mx-2">با قوانین آشنایی دارم</span>
        </div>
        <div className="w-100 text-right">
          <input
            type="checkbox"
            name="newsletter"
            className="ml-2"
            onChange={this.checkChangeHandler}
          />
          <span className="mx-2">مایل به دریافت خبر نامه هستم</span>
        </div>

        <button
          className="btn btn-warning form-control rounded my-2"
          onClick={this.signUp}
        >
          ثبت نام
        </button>
        <button
          className="btn text-primary btn-outline"
          onClick={() => this.props.toggle(false)}
        >
          ورود
        </button>
      </div>
    );
  }
}
