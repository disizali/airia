import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "./Product";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  getData(subTab) {
    const { parent } = this.props;
    if (subTab == 0) {
      // const categories = parent.map(item => {
        // return Categories;
      // });
      return "";
    }
  }
  render() {
    const { parent, subTab, changeSubTab } = this.props;
    console.log(this.props);

    // const category = parent.Categories.find(item => item.id == tab);
    return (
      <Container className="d-flex flex-column my-3 text-right rtl">
        <div className="splitter my-3"></div>
        <div className="d-flex align-items-center">
          <h3 className="my-3">تور {parent.name}</h3>
          <span
            className={`category-switcher p-1 mx-2 ${
              subTab == 0 ? "active" : ""
            }`}
            onClick={() => changeSubTab(0)}
          >
            همه
          </span>
          {parent.Categories.map((item, index) => {
            return (
              <span
                key={index}
                className={`category-switcher p-1 mx-2 ${
                  subTab == index + 1 ? "active" : ""
                }`}
                onClick={() => changeSubTab(index + 1)}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        {this.getData(subTab)}
        {/* <Row>
          {category.Tours.map(item => {
            return (
              <Col>
                <Product image={"test"} item={item.id} />
              </Col>
            );
          })}
        </Row> */}
      </Container>
    );
  }
}
