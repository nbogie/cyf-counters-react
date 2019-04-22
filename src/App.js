import React, { Component } from "react";
import "./App.css";
import CountersPanel from "./CountersPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountersPanel
          title="Meal Counts"
          names={["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"]}
        />
      </div>
    );
  }
}

export default App;
