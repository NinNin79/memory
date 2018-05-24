import React from 'react'
import HallOfFame, { FAKE_HOF } from './HallOfFame'

const Won = ({isWon}) => { 
    if (isWon)
    return (<HallOfFame entries={FAKE_HOF} />)
    else 
    return (<p> PERDU !</p>)

}

export default Won