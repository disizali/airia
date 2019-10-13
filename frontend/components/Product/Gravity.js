import React, { Component } from "react";

export class Gravity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>جاذبه های گردشگری</h3>
        <p>{this.props.gravity[0].data}</p>
      </div>
    );
  }
}

export default Gravity;
