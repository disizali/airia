import React, { Component } from "react";

export class Gravity extends Component {
  constructor(props) {
    super(props);
    let overlay = false;
    if (props.gravity[0].data.length >= 500) {
      overlay = true;
    }
    this.state = { overlay, full: false };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState({ full: !this.state.full });
  }

  render() {
    const { overlay, full } = this.state;
    const needFull = this.props.gravity[0].data.length > 500;
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100"
      >
        <h3 className="box-title pr-3">جاذبه های گردشگری</h3>
        <div
          dangerouslySetInnerHTML={{
            __html:
              this.props.gravity[0].data.slice(0, full ? -1 : 500) +
              (needFull ? "..." : "")
          }}
        ></div>
        <div
          className="gravity-overlay"
          style={{ display: overlay && !full ? "block" : "none" }}
        ></div>
        {needFull && (
          <a className="d-flex justify-content-end w-100 text-second">
            <button className="btn gravity-more" onClick={this.changeMode}>
              {full ? "بستن" : "بیشتر بخوانید"}
            </button>
          </a>
        )}
      </div>
    );
  }
}

export default Gravity;
