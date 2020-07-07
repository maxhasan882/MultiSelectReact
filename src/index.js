import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      objectArray: [
        { key: "Option 1", cat: "Group" },
        { key: "Option 2", cat: "Group" },
        { key: "Option 3", cat: "Group" },
        { key: "Option 4", cat: "Group" },
      ],
      selectedValues: [{}],
    };
    this.style = {
      chips: {
        background: "red",
      },
      searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px",
      },
      multiselectContainer: {
        color: "red",
      },
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(obj) {
    this.selectedValues.push({});
  }

  render() {
    const { plainArray, objectArray, selectedValues } = this.state;
    return (
      <div className="App">
        <h4 id="pre" className="mt40">
          Multiselect Dropdown
        </h4>
        <Multiselect options={objectArray} displayValue="key" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
