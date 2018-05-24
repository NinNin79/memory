import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick = {() => handleCardClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

function handleCardClick(card) {
  console.log(card, 'clicked')
}

export default Card

