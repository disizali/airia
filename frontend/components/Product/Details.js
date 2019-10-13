import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details } = this.props;
    return (
      <div>
        <Row>
          {details.map((item, index) => {
            const data = JSON.parse(item.data);
            return (
              <Col sm={12} key={index} className="my-2">
                <i className={`text-main mx-2 fas fa-${data.icon}`}></i>
                <b className="text-main mx-2">{data.title}</b>
                <b className="text-main mx-2">:</b>
                <span className="text-muted mx-2">{data.text}</span>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Details;
