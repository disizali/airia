import React, { Component } from "react";
import Link from "next/link";
import UserContext from "../UserContext";

export default class Access extends Component {
  static contextType = UserContext;
  render() {
    const { accessOpen } = this.props;
    const { logout } = this.context;
    return (
      <div
        className={`access-panel d-flex justify-content-center align-items-center ltr flex-column ${
          accessOpen ? "open" : ""
        }`}
      >
        <ul className="list-group list-group-flush p-0 text-center w-75 rtl text-right">
          <Link href="/dashboard/profile">
            <a className="list-group-item list-group-item-action text-right">
              <i className="fad fa-user mx-2 text-muted"></i>
              <span className="mx-2 text-muted">پروفایل</span>
            </a>
          </Link>
          <Link href="/dashboard/credit">
            <a className="list-group-item list-group-item-action text-right">
              <i className="fad fa-wallet mx-2 text-muted"></i>
              <span className="mx-2 text-muted">افزایش اعتبار</span>
            </a>
          </Link>
          <Link href="/dashboard/favorites">
            <a className="list-group-item list-group-item-action text-right">
              <i className="fad fa-heart mx-2 text-muted"></i>
              <span className="mx-2 text-muted">علایق</span>
            </a>
          </Link>
          <Link href="/dashboard/history">
            <a className="list-group-item list-group-item-action text-right">
              <i className="fad fa-history mx-2 text-muted"></i>
              <span className="mx-2 text-muted">تاریخچه خرید</span>
            </a>
          </Link>
          <Link href="/">
            <a
              className="list-group-item list-group-item-action text-right"
              onClick={logout}
            >
              <i className="fad fa-sign-in-alt mx-2 text-danger"></i>
              <span className="mx-2 text-danger">خروج</span>
            </a>
          </Link>
        </ul>
      </div>
    );
  }
}
