import React, { Component } from "react";
import "./App.css";
import CountersPanel from "./CountersPanel";
import SliderToy from "./SliderToy";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountersPanel
          title="Meal Order: Counts"
          names={["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"]}
        />
        <SliderToy />
        <SliderToy />
        <SliderToy />
      </div>
    );
  }
}

export default App;
