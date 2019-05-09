import React, { Component } from "react";
import CounterButton from "./CounterButton";
import "./App.css";

class CountersPanel extends Component {
  remakeCounts = () => {
    return this.props.names.reduce((obj, n) => {
      let newObj = { name: n, count: 0 };
      obj[n] = newObj;
      return obj;
    }, {});
  };

  state = {
    counts: this.remakeCounts(),
    total: 0 // it would be better to compute this each time
  };

  counterClicked = event => {
    const id = event.target.id; // cache it.  We can't use event in async setState
    this.setState(prev => {
      prev.counts[id].count++;
      prev.total++;
      return prev;
    });
  };

  reset = () => {
    this.setState({ counts: this.remakeCounts(), total: 0 });
  };
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>{this.props.title}</h1>
          <div className="container">
            {Object.values(this.state.counts).map(c => (
              <CounterButton
                id={c.name}
                key={c.name}
                text={c.name}
                count={c.count}
                handleClick={this.counterClicked}
              />
            ))}
            <div className="row">
              <span className="col-6">Total</span>
              <span className="col-6 total">{this.state.total}</span>
            </div>
            <div className="row">
              <SecondaryButton text="Reset" handleClick={this.reset} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function SecondaryButton(props) {
  return (
    <button className="btn btn-warning" onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

export default CountersPanel;
