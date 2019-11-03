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
      <div className="magazine-preview">
        <Row className="my-3 ml-0">
          <Col sm={12} md={8} className="d-flex flex-column w-100 h-100">
            <div className="w-100">
              <Link href={`/mag/${posts[0].id}`}>
                <a>
                  <Row className="bg-white rounded shadow-sm m-0 p-0">
                    <Col sm={12} md={6} className="p-0">
                      <img
                        src={posts[0].cover}
                        alt={posts[0].title}
                        width="100%"
                        className="rounded"
                      />
                    </Col>
                    <Col sm={12} md={6}>
                    <div className="d-flex flex-column align-items-center py-2 py-md-4 px-1 px-md-4 h-100">
                      <h4 className="text-dark">{posts[0].title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: posts[0].body.substr(
                            posts[0].body.indexOf("<p>"),
                            posts[0].body.indexOf("</p>")
                          )
                        }}
                      ></div>
                    </div>
                    </Col>
                  </Row>
                </a>
              </Link>
            </div>

            <div className="mt-3 rounded d-none d-md-flex">
              <div className="w-50 ml-3 bg-white rounded shadow-sm">
                <div className="d-flex flex-column">
                  <Link href={`/mag/${posts[1].id}`}>
                    <a>
                      <img
                        src={posts[1].cover}
                        alt={posts[1].title}
                        width="100%"
                        className="rounded"
                      />
                      <h4 className="text-dark m-3">{posts[1].title}</h4>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="w-50 mr-3 bg-white rounded shadow-sm">
                <div className="d-flex flex-column">
                  <Link href={`/mag/${posts[2].id}`}>
                    <a>
                      <img
                        src={posts[2].cover}
                        alt={posts[2].title}
                        width="100%"
                        className="rounded"
                      />
                      <h4 className="text-dark m-3">{posts[2].title}</h4>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={4} className="bg-white rounded shadow-sm my-3 my-md-0">
            {posts.slice(0).map((item, index) => {
              return (
                <div key={index} className="my-3 magazine-list-container">
                  <Row className="rtl">
                    <Link href={`mag/${item.id}`}>
                      <a className="d-flex">
                        <Col sm={4}>
                          <img
                            src={item.cover}
                            width="100%"
                            alt={item.title}
                            className="rounded"
                          />
                        </Col>
                        <Col sm={8} className="p-3 d-flex align-items-center">
                          <span className="magazine-list-item-title text-dark">
                            {item.title}
                          </span>
                        </Col>
                      </a>
                    </Link>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default List;
