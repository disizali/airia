import React, { Component } from "react";
import { Container } from "reactstrap";

export class Cover extends Component {
  render() {
    return (
      <section className="cover rtl">
        <Container className="d-flex justify-content-start text-right align-items-end">
        <h1>{this.props.title}</h1>
        </Container>
      </section>
    );
  }
}

export default Cover;
