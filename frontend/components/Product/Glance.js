import React, { Component } from "react";

export class Glance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { glance } = this.props;
    return (
      <div className="d-flex flex-column">
        {glance.map((item, index) => {
          const data = JSON.parse(item.data);
          const type = (index % 2 == 0 ) ? "even" : "odd"
          return (
            <div key={index} className="d-flex glance-item my-2">
              <div className={`glance-title w-25 p-3 d-flex ${type}`}>
                <i className={`fad fa-${data.icon}`}></i>
                <span>{data.title}</span>
              </div>
              <span className="bg-muted w-75 p-3">{data.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Glance;
