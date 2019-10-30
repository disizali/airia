import React, { Component } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import Ads from "../../components/Tabs/Magazine/Ads";
import Archive from "../../components/Tabs/Magazine/Archive";

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
  render() {
    const { post , magazine} = this.props;
    if (post == "") return this.noPost();
    return (
      <Layout>
        <Container className="my-5">
          <Row className="rtl text-right">
            <Col sm={9} className="bg-white p-0 rounded">
              <img src={post.cover} width="100%" className="rounded" />
              <h1 className="postazine-page-title m-3 text-main">
                {post.title}
              </h1>
              <hr className="mx-2" />
              <div
                className="m-3"
                dangerouslySetInnerHTML={{ __html: post.body }}
              ></div>
            </Col>
            <Col sm={3}>
              <Ads />
              <Archive magazine={magazine.slice(0, 10)} />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Mag;
