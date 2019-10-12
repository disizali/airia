import React, { Component } from "react";
import { Container } from "reactstrap";
import List from "./List";

export class Domestic extends Component {
  render() {
    return (
      <Container class="container rtl text-right">
        {[1].map((item, index) => {
          return <List key={index} id={item} />;
        })}
      </Container>
    );
  }
}
export default Domestic;
