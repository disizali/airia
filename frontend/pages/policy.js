import React, { Component } from "react";
import Layout from "../components/Layout";
import Cover from "../components/Cover";
import { Container } from "reactstrap";
const list = [
  ["clone", "قوانین و مقررات"],
  ["medal", "قوانین چارتر"],
  ["plane", "قوانین پرواز داخلی"],
  ["plane", "درصد جریمه استرداد و بار مجاز پرواز داخلی"],
  ["plane", "قوانین پرواز خارجی"],
  ["scroll", "قوانین بیمه"],
  ["scroll", "قوانین قطار"],
  ["hotel", "قوانین هتل خارجی"],
  ["hotel", "قوانین هتل داخلی"],
  ["star", "قوانین CIP"],
  ["bus", "قوانین اتوبوس"],
  ["route", "قوانین تور"],
  ["route", "قوانین کنسلی تور"],
];
export class policy extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: null };
  }
  render() {
    return (
      <Layout>
        <Cover title="قوانین و مقررات" />
        <Container className="privacy-container rtl text-right">
          <ul>
            {list.map((item, index) => {
              return (
                <li>
                  <div>
                    <div>
                      <i className={`fad fa-${item[0]}`} />
                      <span>{item[1]}</span>
                    </div>
                    <i className="fas fa-sort-down" />
                  </div>
                  <div>xyz / yzx</div>
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
