import React, { Component } from 'react'

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className="counter-button col-sm row">
            <button className="btn btn-primary col-sm" 
            onClick={this.increment}>{this.props.text}</button>
        <span className="col-sm">{this.state.count}</span>
      </div>
    );
  };

  increment = () => {
    this.setState((prev) => { return { count: prev.count + 1 } });
  }
}
export default CounterButton