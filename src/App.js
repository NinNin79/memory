import React, { Component } from 'react';
import shuffle from 'lodash.shuffle'

import './App.css';

import Card from './Card'
import GuessCount from './GuessCount'
import Won from './Won'
import Greeter from './Greeter'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750


class App extends Component {

  state = {
    cards : this.generateCards(),
    currentPair : [],
    guesses : 0,
    matchedCardIndices : []
  }
//cards = this.generateCards()

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

  //1ere place
  handleCardClick = index => {
    const {currentPair} = this.state
    console.log(" dans le handleCardClick" + currentPair + " fin" )
    if(currentPair.length === 2) {
      console.log("currentPair.lenght = 2")
      return
    }
    if(currentPair.length === 0) {
      console.log("currentPair.lenght = 2")
      this.setState({currentPair : [index]})
      //console.log("dans currentPair = 0")
      return 
    }
    this.handleNewPairClosedBy(index)
  }
  //2e place
  handleNewPairClosedBy(index) {
    //console.log(" dans le handleNewPairClosedBy")
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    console.log("2e :" + newPair)
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      //console.log("matched")
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  //3e place
  getFeedbackForCard(index) {
    //console.log("dans le getFeedBackForCard")
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)
  
    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }
  
    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }
  
    return indexMatched ? 'visible' : 'hidden'
  }

  render() {
    const {cards, guesses, matchedCardIndices} = this.state
    const won = matchedCardIndices.length === cards.length
    return (
      <div className="memory">
        <Greeter whom="Roberto" />
        <GuessCount guesses={guesses} />
        {cards.map((card, index) => (
          <Card
            card={card}
            feedback={this.getFeedbackForCard(index)}
            index = {index}
            key={index}
            onClick={this.handleCardClick}
          />
        ))}
        <Won isWon= {won} />
      </div>
    )
  }


}

export default App