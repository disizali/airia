import React, { Component } from "react";

export class Glance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { glance } = this.props;
    return (
      <div
        sm={12}
        md={4}
        className="box-container d-flex justify-content-start flex-column align-items-start w-100 h-100"
      >
        <h3 className="box-title pr-3">نگاه مختصر</h3>
        {glance.map((item, index) => {
          const data = JSON.parse(item.data);
          const type = index % 2 == 0 ? "even" : "odd";
          return (
            <div key={index} className="d-flex glance-item my-2 w-100">
              <div className={`d-flex align-items-center glance-title w-25 p-2 d-flex ${type}`}>
                <i className={`fad fa-${data.icon}`}></i>
                <span>{data.title}</span>
              </div>
              <span className="bg-muted w-75 p-2">{data.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Glance;
