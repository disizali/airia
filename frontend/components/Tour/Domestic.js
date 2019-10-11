import React, { Component } from "react";
import Slider from "react-slick";
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
            <div className="d-flex flex-column" key={index}>
              <div className="splitter my-3"></div>
              <h3 className=" my-3">لیست شماره {item}</h3>
              <Slider {...settings} className="text-center">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-danger card d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={`https://picsum.photos/200/20${item}`}
                        className="rounded shadow"
                      />
                      <h3>{item}</h3>
                    </div>
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
