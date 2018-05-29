import React from 'react'
import PropTypes from 'prop-types'

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

Card.propTypes = {
  card: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    'hidden',
    'justMatched',
    'justMismatched',
    'visible',
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card

