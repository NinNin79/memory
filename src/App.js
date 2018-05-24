import React, { Component } from 'react';
import './App.css';

import Card from './Card'
import GuessCount from './GuessCount'
import Won from './Won'


const Greeter = ({ whom }) => (
  <button onClick={() => console.log(`Bonjour ${whom} !`)}>
    Vas-y, clique !
  </button>
)



class App extends Component {
  render() {
    return (
      <div className="memory">
        <Greeter whom="Roberto" />
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
        <Won isWon= {new Date().getSeconds() % 2 === 0} />
      </div>

      
    )
  }
  


}

export default App;
