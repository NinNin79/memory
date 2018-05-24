import React, { Component } from 'react';
import './App.css';

import Card from './Card'
import GuessCount from './GuessCount'


const Greeter = ({ whom }) => (
  <button onClick={() => console.log(`Bonjour ${whom} !`)}>
    Vas-y, clique !
  </button>
)



class App extends Component {
  render() {
    const won = new Date().getSeconds() % 2 === 0
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
        {won &&<p> GAGNÉ !</p>}
      </div>

      
    )
  }
  


}

export default App;
