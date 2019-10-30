import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Link from "next/link";

export class Header extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="magazine-header">
        <Row className="rtl my-4">
          <Col className="p-0">
            <Link href={`/mag/${posts[0].id}`}>
              <a className="text-right text-white ">
                <div
                  className="header-post-item rounded w-100 h-100"
                  style={{
                    backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.5) 5%,rgba(0,0,0,0)),url(${posts[0].cover})`
                  }}
                >
                  <img
                    src={posts[0].cover}
                    width="100%"
                    className="header-post-size"
                  />
                  <span className="header-post-title">{posts[0].title}</span>
                </div>
              </a>
            </Link>
          </Col>
          <Col>
            <Link href={`/mag/${posts[1].id}`}>
              <a className="text-right text-white w-100 h-100">
                <div
                  className="header-post-item rounded"
                  style={{
                    backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.5) 5%,rgba(0,0,0,0)),url(${posts[1].cover})`
                  }}
                >
                  <img
                    src={posts[1].cover}
                    width="100%"
                    className="header-post-size"
                  />
                  <span className="header-post-title">{posts[1].title}</span>
                </div>
              </a>
            </Link>
          </Col>
        </Row>
        <Row className="rtl my-4">
          <Col>
            <Link href={`/mag/${posts[2].id}`}>
              <a className="text-right text-white ">
                <div
                  className="header-post-item rounded"
                  style={{
                    backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.5) 5%,rgba(0,0,0,0)),url(${posts[2].cover})`
                  }}
                >
                  <img
                    src={posts[2].cover}
                    width="100%"
                    className="header-post-size"
                  />
                  <span className="header-post-title">{posts[2].title}</span>
                </div>
              </a>
            </Link>
          </Col>
          <Col>
            <Link href={`/mag/${posts[3].id}`}>
              <a className="text-right text-white ">
                <div
                  className="header-post-item rounded"
                  style={{
                    backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.5) 5%,rgba(0,0,0,0)),url(${posts[3].cover})`
                  }}
                >
                  <img
                    src={posts[3].cover}
                    width="100%"
                    className="header-post-size"
                  />
                  <span className="header-post-title">{posts[3].title}</span>
                </div>
              </a>
            </Link>
          </Col>
          <Col>
            <Link href={`/mag/${posts[4].id}`}>
              <a className="text-right text-white ">
                <div
                  className="header-post-item rounded"
                  style={{
                    backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.5) 5%,rgba(0,0,0,0)),url(${posts[4].cover})`
                  }}
                >
                  <img
                    src={posts[4].cover}
                    width="100%"
                    className="header-post-size"
                  />
                  <span className="header-post-title">{posts[4].title}</span>
                </div>
              </a>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
