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
      <div className="w-100 box-container shadow p-3 d-flex justify-content-between m-0 mb-4">
        <h1 className="tour-title text-dark m-0">تور {tour.name}</h1>
        <div className="rtl">
            <i className="text-second fad fa-medal mx-2"></i>
            <span className="text-second mx-2">پیشنهاد ویژه</span>
        </div>
      </div>
    );
  }
}

export default Title;
