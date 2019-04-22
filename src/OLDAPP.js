import React from 'react'

import Logo from './Logo'
import Clock from './Clock'
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"
import CounterButton from "./CounterButton"

function App(){
  return (
  <div className='container'>
    <Logo appName='PokeDex' handleClick={logWhenClicked}/>
    <BestPokemon names={['Aliosaur', 'Squirtle', 'Bulbasaur', 'Charmander']}/>
    <CaughtPokemon date={new Date().toLocaleDateString()}/>
    <Clock/>
    <CounterPanel/>
    </div>
  )
}
const logWhenClicked = () => console.log("Neill App Log: ");

function CounterPanel() {
  return (
    <div>
      <div class='jumbotron'>
        <h1>Meal Counters</h1>
    <div className='row'>
      <CounterButton  text="Vegetarian" />
      <CounterButton  text="Vegan"/>
      </div>
      <div className='row'>
      <CounterButton text="Halal"/>
      <CounterButton text="Anything!"/>
      </div>
      </div>
    </div>
  )
}
export default App;
