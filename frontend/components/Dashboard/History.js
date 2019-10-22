import React, { Component } from "react";
import { Container, Button } from "reactstrap";
export default class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4">
        <div className="d-flex justify-content-between">
          <h5>
            <i className="fal fa-history text-second mx-2"></i>
            <span className="mx-2 text-second">
              تاریخچه خرید های خودتون رو اینجا ببینید
            </span>
          </h5>
        </div>
      </Container>
    );
  }
}
