import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import jMoment from "jalali-moment";
import persianJs from "persianjs";
import Link from "next/link";
export class List extends Component {
  getJalaliDate(date) {
    return this.getPersian(
      jMoment(new Date(date))
        .locale("fa")
        .format("D MMMM")
    );
  }

  getPersian(data) {
    return persianJs(data)
      .englishNumber()
      .toString();
  }
  render() {
    const { magazine } = this.props;
    return (
      <div className="my-3 my-md-0">
        <div className="archive-title">
          <div className="d-flex align-items-center justify-content-start text-white h-100">
            <h5 className="m-1">جدیدترین مطالب</h5>
          </div>
        </div>
        {magazine.map((item, index) => {
          return (
            <div key={index} className="bg-white rounded shadow mb-1">
              <Link href={`/mag/${item.id}`}>
                <a>
                  <div className="d-flex">
                    <div className="w-25">
                      <img
                        src={item.cover}
                        width="100%"
                        alt={item.title}
                        className="rounded-left"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-start text-right w-75">
                      <span className="archive-post-title text-dark px-2">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
