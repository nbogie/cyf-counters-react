import React, { Component } from 'react';
import './App.css';
import CounterButton from "./CounterButton"

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterPanel/>
        <Spinner title="speed"/>
      </div>
    );
  }
}

class SecondaryButton extends Component{
  render(){
    return (
      <button 
      className='btn btn-secondary' 
      onClick={this.props.handleClick}
      >{this.props.text}
      </button>
    )
  }
}

class CounterPanel extends Component {
  
  render() {
    return (
    <div>
      <div className='jumbotron'>
        <h1>Meal Counters</h1>
        <div className='row'>
          <CounterButton text="Vegetarian" />
          <CounterButton text="Vegan"/>
        </div>
        <div className='row'>
          <CounterButton text="Halal"/>
          <CounterButton text="Anything!"/>
        </div>
        <div className='row'>
          <SecondaryButton 
          text="Reset"/>
        </div>
      </div>
    </div>
  )
  }
}


class Spinner extends Component {
  
  constructor(props){
    super(props);
    this.state = { count: 0 };
  }
  
  inc = () => {
    this.setState(prev => { return {count: prev.count + 1} })
  }
  
  dec = () => {
    this.setState(prev => { return {count: prev.count - 1}})
  }
  
  render() {
    return (
    <div>
      <span>{this.props.title}</span>
      <button onClick={this.inc} className='btn btn-primary'>up</button>
      <button onClick={this.dec} className='btn btn-primary'>down</button>
      <input value={this.state.count}/>
    </div>
  )
  }
}

export default App;
