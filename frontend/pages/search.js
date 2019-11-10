import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import Layout from "../components/Layout";
import Link from "next/link";
import * as api from "../src/api";
export default class Search extends Component {
  static async getInitialProps(context) {
    const {
      query: { query }
    } = context;
    const { magazines, tours } = await api.search(query);
    return { magazines, tours, query };
  }
  constructor(props) {
    super(props);
    this.state = { newQuery: "" };
    this.handleNewQueryChanges = this.handleNewQueryChanges.bind(this);
  }
  handleNewQueryChanges(e) {
    this.setState({ newQuery: e.target.value });
  }
  render() {
    const { magazines, tours, query } = this.props;
    const { newQuery } = this.state;
    return (
      <Layout>
        <Container className="py-2 py-md-5 rtl">
          <div className="p-4 bg-white d-flex justify-content-between align-items-center rounded shadow-sm">
            <span>
              جستجو برای <span className="text-second">{query}</span>
            </span>
            <div className="d-flex">
              <input
                type="text"
                className="form-control mx-1"
                placeholder="جستجو ..."
                value={newQuery}
                onChange={this.handleNewQueryChanges}
              />
              <Link href={newQuery ? `/search/?query=${newQuery}` : ""}>
                <a className="mx-1">
                  <Button color="warning">
                    <i className="fas fa-search text-light"></i>
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div
            sm={12}
            md={4}
            className="box-container d-flex justify-content-start flex-column align-items-start my-4"
          >
            <h3 className="box-title pr-3">مقالات</h3>
            <Row className="w-100">
              {!magazines.length && (
                <span className="text-muted">
                  در این دسته بندی محتوایی وجود ندارد
                </span>
              )}
              {magazines.map((item, index) => {
                return (
                  <Col
                    sm={12}
                    md={3}
                    className="bg-white rounded shadow p-0 text-right"
                    key={index}
                  >
                    <Link href={`/mag/${item.id}`}>
                      <a>
                        <img
                          src={`${item.cover}`}
                          width="100%"
                          className="rounded"
                        />
                        <div className="w-100 h-100 p-3">
                          <span className="m-2 text-dark">{item.title}</span>
                        </div>
                      </a>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div
            sm={14}
            md={4}
            className="box-container d-flex justify-content-start flex-column align-items-start my-2"
          >
            <h3 className="box-title pr-3">تور ها</h3>
            <Row className="w-100">
              {!tours.length && (
                <span className="text-muted">
                  در این دسته بندی محتوایی وجود ندارد
                </span>
              )}
              {tours.map((item, index) => {
                return (
                  <Col
                    sm={12}
                    md={3}
                    className="bg-white rounded shadow p-0 text-right"
                    key={index}
                  >
                    <Link href={`/product/${item.id}`}>
                      <a>
                        <img
                          src={`/static/uploads/images/${item.image}`}
                          width="100%"
                          className="rounded"
                        />
                        <div className="w-100 h-100 p-3">
                          <span className="text-dark">تور {item.name}</span>
                        </div>
                      </a>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}
