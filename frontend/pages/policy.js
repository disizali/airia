import React, { Component } from "react";
import Layout from "../components/Layout";
import Cover from "../components/Cover";
import { Container } from "reactstrap";
import list from "../public/static/data/policy.json";
import Head from "next/head";

export class policy extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: null };
    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem(item) {
    const currentState = this.state[`item${item}`];
    this.setState({ [`item${item}`]: currentState ? false : true });
    console.log(this.state);
  }
  render() {
    return (
      <Layout>
          <Head>
        <title>بالهای آسمانی آیریا - قوانین و مقررات</title>
        </Head>
        <Cover title="قوانین و مقررات" />
        <Container className="policy-container rtl text-right">
          <ul>
            {list.map((item, index) => {
              return (
                <li key={index} onClick={() => this.toggleItem(index)}>
                  <div>
                    <div>
                      <i className={`fad fa-${item[0]}`} />
                      <span>{item[1]}</span>
                    </div>
                    <i
                      className={`fas fa-sort-down ${
                        this.state[`item${index}`] ? "opened" : "collapsed"
                      }`}
                    />
                  </div>
                  <div
                    className={`bg-white p-2 ${
                      this.state[`item${index}`] ? "opened" : "collapsed"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item[2] }}
                  >
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Layout>
    );
  }
}

export default policy;
