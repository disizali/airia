import React, { Component } from "react";
import Categories from "./Categories";

export class Tour extends Component {
  render() {
    return (
      <section className="tour">
        <Categories />
      </section>
    );
  }
}

export default Tour;