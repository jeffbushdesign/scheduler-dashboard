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
    loading: false,
    focused: null
  };

  selectPanel(id) {
    this.setState({
      focused: id
    });
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });

    if (this.state.loading) {
      return <Loading />;
    }

    // Map over the data array and create a new Panel for each of the four data objects. Render the panels array as children of the main element.

    // On each iteration, we should pass the Panel component four props.
    // The key can use the value from panel.id
    // The id can use the value from panel.id
    // The label can use the value from panel.label
    // The value can use the value from panel.value

    // State
    // When the value is null it means we are in the unfocused four-panel view. The other options for the value of this.state.focused are the ids of the panels from 1 - 4. When we are in focused mode, we don't want to render four panels; we want to render one.

    const panels = (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data)
      .map(panel => (
        <Panel
          key={panel.id}
          id={panel.id}
          label={panel.label}
          value={panel.value}
          onSelect={this.selectPanel}
        />
      ));

    return <main className={dashboardClasses}>
      {panels}

    </main>;
  }
}

export default Dashboard;
