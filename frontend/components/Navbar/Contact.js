import React, { Component } from "react";
import { Container } from "reactstrap";

export class Contact extends Component {
  render() {
    const { contactOpen } = this.props;
    return (
      <div
        className={`contact-panel d-flex justify-content-center align-items-center ltr flex-column ${
          contactOpen ? "open" : ""
        }`}
      >
        <div className="p-3">
          <div>
            <span className="mx-1">پشتیبانی</span>
            <i className="mx-1">۲۴-۷</i>
          </div>

          <hr className="bg-gray w-100" />
          <div>
            <span className="mx-1">۰۲۱</span>
            <i className="mx-1">-</i>
            <span className="mx-1">۵۷۸۹۲</span>
          </div>
        </div>
        {/* <hr className="bg-second w-100" /> */}
        <ul className="list-group list-group-flush py-2 text-center">
          <a
            href="/airia-contract.docx"
            className="list-group-item list-group-item-action"
          >
            متن قرارداد آیریا
          </a>
          <a
            href="/airia-ordinance.docx"
            className="list-group-item list-group-item-action"
          >
            مرام نامه آیریا
          </a>
        </ul>
      </div>
    );
  }
}
export default Contact;
