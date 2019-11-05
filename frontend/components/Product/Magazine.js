import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Link from "next/link";

export default class Magazine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { magazine } = this.props;
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100 h-100"
      >
        <h3 className="box-title pr-3">مقالات مرتبط</h3>
        <Row className="related-magazines-container">
          {magazine.map((item, index) => {
            return (
              <Col sm={6} className="related-magazine h-100" key={index}>
                <div className="h-100">
                  <Link href={`/mag/${item.id}`}>
                    <a>
                      <img src={item.cover} width="100%" className="rounded" />
                      <p className="m-2">{item.title}</p>
                    </a>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
