import React, { Component } from 'react';
import shuffle from 'lodash.shuffle'

import './App.css';

import Card from './Card'
import GuessCount from './GuessCount'
import Won from './Won'
import Greeter from './Greeter'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'


class App extends Component {
cards = this.generateCards()

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  render() {
    return (
      <div className="memory">
        <Greeter whom="Roberto" />
        <GuessCount guesses={0} />
        {this.cards.map((card, index) => (
          <Card
            card={card}
            feedback="visible"
            key={index}
            onClick={this.handleCardClick}
          />
        ))}
        <Won isWon= {new Date().getSeconds() % 2 === 0} />
      </div>
    )
  }


}

export default App