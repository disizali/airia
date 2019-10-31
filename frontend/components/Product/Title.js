import React, { Component } from "react";

export class Title extends Component {
  getJalaliDate(date) {
    return this.getPersian(
      jMoment(new Date(date))
        .locale("fa")
        .format("D MMMM")
    );
  }
  getDuration(startDate, endDate) {
    return this.getPersian(moment(endDate).diff(moment(startDate), "days") + 1);
  }

  getPersian(data) {
    return persianJs(data)
      .englishNumber()
      .toString();
  }

  render() {
    const { tour } = this.props;
    return (
      <div className="w-100 box-container shadow mb-5 p-3 d-flex justify-content-between">
        <h1 className="tour-title text-dark m-0">تور {tour.name}</h1>
        <div className="rtl">
            <i className="text-warning fad fa-medal mx-2"></i>
            <span className="text-warning mx-2">پیشنهاد ویژه</span>
            {/* <i className="text-warning fas fa-star"></i>
            <i className="text-warning fas fa-star"></i>
            <i className="text-warning fas fa-star"></i>
            <i className="text-warning fas fa-star"></i> */}
        </div>
      </div>
    );
  }
}

export default Title;
