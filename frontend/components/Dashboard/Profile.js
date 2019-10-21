import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import jsCookie from "js-cookie";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
    this.changeEditable = this.changeEditable.bind(this);
    this.edit = this.edit.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
  }

  changeEditable() {
    this.setState({ editable: !this.state.editable });
  }
  changeTextHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async edit() {
    const token = jsCookie.get("authtoken");

    let profile = this.state;
    delete profile.editable;
    const { data } = await axios.put("http://localhost:3001/profile", profile, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    if (data == "updated") {
      this.setState({ editable: false });
    }
  }
  render() {
    const { editable } = this.state;
    const {
      user,
      user: { Profile: profile }
    } = this.props;

    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4">
        <div className="d-flex justify-content-between">
          <h5>
            <i className="fal fa-user text-second mx-2"></i>
            <span className="mx-2 text-second">اطلاعات حساب کاربری شما</span>
          </h5>
          <button className="btn text-muted" onClick={this.changeEditable}>
            <i className="fas fa-pen mx-2"></i>
            <span className="mx-2">ویرایش</span>
          </button>
        </div>
        <div>
          <Row className="my-5 text-right rtl">
            <Col sm={2} className="my-3">
              <span className="text-muted">نام</span>
            </Col>
            <Col sm={10} className="my-3">
              {editable ? (
                <input
                  type="text"
                  name="name"
                  defaultValue={this.state.name || profile.name}
                  onChange={this.changeTextHandler}
                  placeholder="نام  خود را وارد کنید"
                  className="form-control"
                />
              ) : profile.name ? (
                <span>{this.state.name || profile.name}</span>
              ) : (
                <span className="text-muted">
                  شما هنوز نام خود را وارد نکرده اید
                </span>
              )}
            </Col>
            <Col sm={2} className="my-3">
              <span className="text-muted">نام خانوادگی</span>
            </Col>
            <Col sm={10} className="my-3">
              {editable ? (
                <input
                  type="text"
                  name="family"
                  defaultValue={this.state.family || profile.family}
                  onChange={this.changeTextHandler}
                  placeholder="نام خانوادگی خود را وارد کنید"
                  className="form-control"
                />
              ) : profile.family ? (
                <span>{this.state.family || profile.family}</span>
              ) : (
                <span className="text-muted">
                  شما هنوز نام خانوادگی خود را وارد نکرده اید
                </span>
              )}
            </Col>
          </Row>
        </div>
        {editable && (
          <div className="w-100 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={this.edit}>
              ذخیره
            </button>
          </div>
        )}
      </Container>
    );
  }
}
