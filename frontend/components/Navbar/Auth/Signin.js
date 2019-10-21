import React, { Component } from "react";
import axios from "axios";
import validator from "validator";
import Router from "next/router";
import jsCookie from "js-cookie";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "a.hassssani@gmail.com", password: "123456789" };
    this.signIn = this.signIn.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  textChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async signIn() {
    const { username, password } = this.state;
    const usernameResult =
      validator.isEmail(username) || validator.isNumeric(username);
    const passwordResult = !validator.isEmpty(password) && password.length >= 8;

    if (usernameResult && passwordResult) {
      const { data } = await axios.post("http://localhost:3001/login", {
        username,
        password
      });
      if (data == "login failed") {
        alert("login failed");
      } else {
        jsCookie.set("authtoken", data);
        Router.push("/dashboard");
      }
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.textChangeHandler}
          className="form-control my-2"
          placeholder="ایمیل / شماره تلفن"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.textChangeHandler}
          className="form-control my-2"
          placeholder="رمز عبور"
        />

        <button
          className="btn btn-primary form-control rounded my-2"
          onClick={this.signIn}
        >
          ورود
        </button>
        <button
          className="btn text-warning"
          onClick={() => this.props.toggle(true)}
        >
          ثبت نام
        </button>
      </div>
    );
  }
}
