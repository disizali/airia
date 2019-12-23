import React, { Component } from "react";
import Panel from "../components/Admin/Index";
import "../styles/admin/index.scss";
import * as api from "../src/api";

export default class Admin extends Component {
  static async getInitialProps(context) {
    const tours = await api.getTours();
    return { tours };
  }
  constructor(props) {
    super(props);
    this.state = { garanted: true };
  }
  render() {
    const { garanted } = this.state;
    const { tours } = this.props;
    return (
      <div className="rtl text-right">
        {garanted == true && <Panel tours={tours} />}
      </div>
    );
  }
}