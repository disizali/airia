import React, { Component } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import Archive from "../../components/Tabs/Magazine/Archive";
import jMoment from "jalali-moment";
import persianJs from "persianjs";

import { Row, Container, Col } from "reactstrap";
export class Mag extends Component {
  static async getInitialProps(context) {
    const {
      query: { id }
    } = context;
    const { data: post } = await axios.get(
      `http://localhost:3001/magazine/${id}`
    );
    const { data: magazine } = await axios.get(
      `http://localhost:3001/magazine`
    );
    return { post, magazine };
  }
  noPost() {
    return (
      <Layout>
        <h5 className="m-5 p-5 text-center rtl">
          <i className="far fa-frown mx-2"></i>
          متاسفانه همچین پستی وجود نداره
        </h5>
      </Layout>
    );
  }
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
    const { post, magazine } = this.props;
    if (post == "") return this.noPost();
    return (
      <Layout>
        <div className="my-3 my-md-5 mx-5">
          <Row className="rtl text-right">
            <Col sm={12} md={9} className="p-0 p-md-2">
              <div className="magazine-title">
                <div className="d-flex align-items-center justify-content-start text-white h-100">
                  <h5 className="m-1">{post.title}</h5>
                </div>
              </div>
              <div className={"bg-white p-0 rounded pb-3"}>
                <img src={post.cover} width="100%" className="rounded-bottom" />
                <i className="fas fa-clock ml-2 mt-2 text-muted"></i>
                <span className="mt-2 text-muted">
                  {this.getJalaliDate(post.createdAt)}
                </span>
                <span> - </span>
                <span className="badge bg-primary text-light">{post.Tags[0].name}</span>
                <hr className="mx-2" />
                <div
                  className="m-3"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                ></div>
              </div>
            </Col>
            <Col sm={12} md={3} className="p-0 p-md-2">
              <Archive magazine={magazine.slice(0, 10)} />
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Mag;
