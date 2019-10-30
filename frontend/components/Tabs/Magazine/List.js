import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import jMoment from "jalali-moment";
import persianJs from "persianjs";
import Link from "next/link";
export class List extends Component {
  getJalaliDate(date) {
    return this.getPersian(
      jMoment(new Date(date))
        .locale("fa")
        .format("D MMMM")
    );
  }

  getPersian(data) {
    return persianJs(data)
      .englishNumber()
      .toString();
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h4 className="magazine-list-title pb-3">جدیدترین مطالب</h4>
        {posts.map((item, index) => {
          return (
            <div key={index} className="bg-white rounded shadow my-3">
              <Row className="rtl">
                <Col sm={4}>
                  <img
                    src={item.cover}
                    width="100%"
                    alt={item.title}
                    className="rounded"
                  />
                </Col>
                <Col sm={8} className="p-3">
                  <Link href={`mag/${item.id}`}>
                    <a>
                      <h5 classNames="text-dark">{item.title}</h5>
                    </a>
                  </Link>
                  <div
                    className="text-muted pl-5"
                    dangerouslySetInnerHTML={{
                      __html: item.body.substr(
                        item.body.indexOf("<p>"),
                        item.body.indexOf("</p>")
                      )
                    }}
                  ></div>
                </Col>
              </Row>
              <hr className="mt-2 mb-0 pt-2" />
              <div className="d-flex justify-content-between px-1 py-1 align-items-center">
                <span>
                  <i className="fal fa-clock text-muted"></i>
                  <span className="mx-2 text-muted">نوشته شده در » </span>
                  <span className="text-muted">
                    {this.getJalaliDate(item.createdAt)}
                  </span>
                </span>
                <Link href={`mag/${item.id}`}>
                  <a>
                    <Button classNames="mx-2" color="primary">
                      <span className="mx-1">مشاهده بیشتر</span>
                      <i className="fad fa-arrow-circle-left mx-1"></i>
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
