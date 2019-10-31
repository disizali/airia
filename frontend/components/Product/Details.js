import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details } = this.props;
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100"
      >
        <h3 className="box-title pr-3">جزئیات</h3>
        {details.map((item, index) => {
          const data = JSON.parse(item.data);
          return (
            <div key={index} className="my-2">
              <i className={`text-main mx-2 fad fa-${data.icon}`}></i>
              <b className="text-main mx-2">{data.title}</b>
              <b className="text-main mx-2">:</b>
              <span className="text-muted mx-2">{data.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Details;
