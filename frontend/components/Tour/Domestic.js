import React, { Component } from "react";
import Slider from "react-slick";
import Product from "./Product";
import { Container } from "reactstrap";

export class Domestic extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <Container className="rtl text-right">
        {[1, 2].map((item, index) => {
          return (
            <div className="d-flex flex-column mt-3" key={index}>
              <div className="splitter my-3"></div>
              <h3 className="my-3">لیست شماره {item}</h3>
              <Slider {...settings} className="text-center">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <Product
                      key={index}
                      image={`https://picsum.photos/seed/picsum/10${item}`}
                      name={`product ${item}`}
                    />
                  );
                })}
              </Slider>
            </div>
          );
        })}
      </Container>
    );
  }
}

export default Domestic;
