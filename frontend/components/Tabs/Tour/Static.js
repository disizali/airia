import React, { Component } from "react";

export default class Static extends Component {
  render() {
    return (
      <img
        src="https://picsum.photos/seed/static1/1000/400"
        className="static-image"
        alt="static image"
        width="100%"
      />
    );
  }
}
