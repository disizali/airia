import React, { Component } from "react";
import Slider from "react-slick";
import Product from "./Product";

export default class List extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="d-flex flex-column my-3 text-right rtl">
        <div className="splitter my-3"></div>
        <h3 className=" my-3">لیست شماره {this.props.id}</h3>
        <Slider {...settings} className="text-center">
          {[1, 2, 3, 4].map((item, index) => {
            return <Product key={index} item={item} />;
          })}
        </Slider>
      </div>
    );
  }
}
