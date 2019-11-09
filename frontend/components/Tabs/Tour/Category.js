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
      let tours = [];
      parent.Categories.forEach(item => {
        tours = [
          ...tours,
          ...item.Tours.filter(item => tours.indexOf(item) == -1)
        ];
      });
      tours = tours.filter(
        (item, index, self) =>
          index ===
          self.findIndex(t => t.place === item.place && t.name === item.name)
      ); // remove duplicates
      return tours;
    } else {
      const category = parent.Categories.find(item => item.id == subTab);
      const tours = [...category.Tours];
      return tours;
    }
  }
  render() {
    const { parent, subTab, changeSubTab } = this.props;
    return (
      <div className="d-flex flex-column my-3 text-right rtl">
        <Container>
          <div className="splitter my-3"></div>
          <div className="d-flex align-items-center">
            <h3 className="my-3 parent-title">تور {parent.name}</h3>
            <span
              className={`category-switcher p-1 mx-1 mx-md-2 ${
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
                  className={`category-switcher p-1 mx-1 mx-md-2 ${
                    subTab == item.id ? "active" : ""
                  }`}
                  onClick={() => changeSubTab(item.id)}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        </Container>
        <Container>
          <Row>
            {this.getData(subTab).map((item, index) => {
              return (
                <Col sm={4} className="my-3" key={item.id}>
                  <Product product={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
