import React, { Component } from "react";
import { Container } from "reactstrap";

export class Contact extends Component {
  render() {
    const { contactOpen } = this.props;
    return (
      <Container
        className={`d-flex justify-content-center align-items-center ltr flex-column contact-panel ${
          contactOpen ? "open" : ""
        }`}
      >
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
      </Container>
    );
  }
}
export default Contact;
