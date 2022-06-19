import React, { Component } from "react";


import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {
  state = {
    loading: false
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    // Map over the data array and create a new Panel for each of the four data objects. Render the panels array as children of the main element.

    // On each iteration, we should pass the Panel component four props.
    // The key can use the value from panel.id
    // The id can use the value from panel.id
    // The label can use the value from panel.label
    // The value can use the value from panel.value

    const panels = data.map(panel => (
      <Panel
        key={panel.id}
        id={panel.id}
        label={panel.label}
        value={panel.value}
      />
    ));

    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
