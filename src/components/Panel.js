import React, { Component } from "react";
import Dashboard from "./Dashboard";

class Panel extends Component {

  render() {
    const {label, value } = this.props;

    return (
      <section className="dashboad_panel">
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;
