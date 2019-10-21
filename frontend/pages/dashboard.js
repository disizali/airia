import React, { Component } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import axios from "axios";
import jsCookie from "js-cookie";

export class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { garanted: 0, user: {} };
  }
  async componentDidMount() {
    const token = jsCookie.get("authtoken");
    if (token != undefined) {
      const { data } = await axios.get("http://localhost:3001/profile", {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      if (data == "login failed") {
        return alert("Login Failed");
      }
      return this.setState({ garanted: 1, user: data });
    }
  }

  render() {
    const { garanted, user } = this.state;
    return <Layout>{garanted && <Dashboard user={user} />}</Layout>;
  }
}

export default dashboard;
