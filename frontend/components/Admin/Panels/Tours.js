import React, { Component } from "react";
import _ from "lodash";
import { Row, Col } from "reactstrap";
import * as api from "../../../src/api";

export class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTour: this.props.tours[0],
      listedTours: this.props.tours,
      editables: {}
    };
    this.changeTour = this.changeTour.bind(this);
    this.searchTour = this.searchTour.bind(this);
    this.updateTour = this.updateTour.bind(this);
  }
  changeTour(selectedTour) {
    const { tours } = this.props;
    const tour = _.find(tours, { id: selectedTour });
    this.setState({ selectedTour: tour });
  }
  searchTour(e) {
    const { tours } = this.props;
    const listedTours = _.filter(tours, tour => {
      return tour.name.indexOf(e.target.value) !== -1;
    });
    this.setState({ listedTours });
  }
  textChangeHandler(e) {
    const { editables, selectedTour } = this.state;
    switch (e.target.id) {
      case "tour-name":
        const newEditables = _.set(editables, "general.name", e.target.value);
        const newSelectedTour = _.set(selectedTour, "name", e.target.value);
        this.setState({
          editables: newEditables,
          selectedTour: newSelectedTour
        });
        break;
      case "tour-gravity":
        _.set(editables, "details.gravity", e.target.value);
        _.find(selectedTour.Details, { type: 3 }).data = e.target.value;
        this.setState({ editables, selectedTour });
        break;
    }
  }
  async updateTour() {
    const edited = { id: this.state.selectedTour.id, ...this.state.editables };
    const result = await api.updateTour(edited);
    alert(
      result == "updated" ? "تور با موفقیت ویرایش شد" : "ویرایش تور ناموفق بود"
    );
  }
  render() {
    const { selectedTour, listedTours } = this.state;
    return (
      <div className="dashboard-tours d-flex">
        <div className="mt-3 w-25 mx-3 border-left pl-3">
          <label htmlFor="search-tour">جستجو برای تور</label>
          <input
            className="form-control mb-3"
            placeholder="نام تور ..."
            id="search-tour"
            onChange={e => this.searchTour(e)}
          />
          {listedTours.length == 0 && (
            <span className="text-muted">هیچ توری با این نام پیدا نشد</span>
          )}
          <ul className="dashboard-tours-list p-0">
            {listedTours.map((item, index) => {
              return (
                <li
                  className={`mb-3 text-center w-100 py-3 ${selectedTour.id ==
                    item.id && "active"}`}
                  onClick={() => this.changeTour(item.id)}
                  key={item.id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-75 dashboard-tour-editor mx-3 mt-3">
          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">نام تور</label>
            <input
              type="text"
              className="form-control"
              id="tour-name"
              value={selectedTour.name}
              onChange={e => this.textChangeHandler(e)}
            />
          </div>

          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">تصاویر</label>
            <Row>
              {JSON.parse(
                _.filter(selectedTour.Details, {
                  type: 2
                })[0].data
              ).map((item, index) => {
                return (
                  <Col key={index}>
                    <img
                      className="rounded"
                      src={`/static/uploads/images/${item}`}
                      width="100%"
                    />
                  </Col>
                );
              })}
            </Row>
          </div>

          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">جزئیات تور</label>
            <ul>
              {_.filter(selectedTour.Details, {
                type: 1
              }).map((item, index) => {
                const data = JSON.parse(item.data);
                return (
                  <li className="my-3" key={index}>
                    <i
                      className={`bg-danger text-white mx-1 rounded p-1  fad fa-trash`}
                    />
                    <i
                      className={`bg-warning text-white mx-1 rounded p-1 fad fa-pen`}
                    />
                    <i className={`text-main fad p-1 fa-${data.icon}`} />
                    <span className="mx-2 text-main">{data.title}</span>
                    <span className="mx-2"> : </span>
                    <span className="mx-2">{data.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">جاذبه های گردشگری</label>
            <textarea
              type="text"
              className="form-control"
              id="tour-gravity"
              rows={5}
              value={selectedTour.Details.find(item => item.type == 3).data}
              onChange={e => this.textChangeHandler(e)}
            ></textarea>
          </div>
          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">نگاه مختصر</label>
            <ul>
              {_.filter(selectedTour.Details, {
                type: 4
              }).map((item, index) => {
                const data = JSON.parse(item.data);
                return (
                  <li className="my-3" key={index}>
                    <i
                      className={`bg-danger text-white mx-1 rounded p-1  fad fa-trash`}
                    />
                    <i
                      className={`bg-warning text-white mx-1 rounded p-1 fad fa-pen`}
                    />
                    <i className={`text-main fad p-1 fa-${data.icon}`} />
                    <span className="mx-2 text-main">{data.title}</span>
                    <span className="mx-2"> : </span>
                    <span className="mx-2">{data.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">لینک نقشه</label>
            <input
              type="text"
              className="form-control"
              id="tour-map"
              value={selectedTour.Details.find(item => item.type == 5).data}
              onChange={e => this.textChangeHandler(e)}
            />
          </div>
          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">فایل دانلود تور</label>
            <input
              type="file"
              className="form-control"
              id="tour-file"
              // value={selectedTour.name}
              // onChange={e => this.textChangeHandler(e)}
            />
          </div>

          <div className="my-2 rounded border p-3">
            <label htmlFor="tour-name">تب ها</label>
          </div>

          <button className="btn btn-danger" onClick={this.updateTour}>
            <i className="fas fa-save mx-2" />
            <span className="mx-2">ذخیره</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Tours;
