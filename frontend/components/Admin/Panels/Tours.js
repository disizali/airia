import React, { Component } from "react";
import _ from "lodash";
export class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTour: this.props.tours[0] };
    this.changeTour = this.changeTour.bind(this);
  }
  changeTour(selectedTour) {
    const { tours } = this.props;
    const tour = _.find(tours, { id: selectedTour });
    this.setState({ selectedTour });
  }
  render() {
    const { tours } = this.props;
    const { selectedTour } = this.state;
    return (
      <div className="dashboard-tours d-flex">
        <ul className="dashboard-tours-list mt-3 w-25 ml-3">
          {tours.map((item, index) => {
            return (
              <li
                className={`mb-3 text-center py-3 ${selectedTour == item.id &&
                  "active"}`}
                onClick={() => this.changeTour(item.id)}
                key={item.id}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="w-75 dashboard-tour-editor mr-3 mt-3">
          <label htmlFor="tour-name">نام تور</label>
          <input
            type="text"
            className="form-control"
            id="tour-name"
            defaultValue={selectedTour.name}
          />
        </div>
      </div>
    );
  }
}

export default Tours;
