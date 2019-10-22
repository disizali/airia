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
            <i className="fal fa-heart text-second mx-2"></i>
            <span className="mx-2 text-second">
              همسفر های خودتون رو با سلیقه خودتون انتخاب کنید{" "}
            </span>
          </h5>
          <button className="btn text-muted" onClick={this.changeEditable}>
            <i className="fas fa-pen mx-2"></i>
            <span className="mx-2">ویرایش</span>
          </button>
        </div>
      </Container>
    );
  }
}
