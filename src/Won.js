import React from 'react'


const Won = ({isWon}) => { 
    if (isWon)
    return (<p> GAGNÉ !</p>)
    else 
    return (<p> PERDU !</p>)

}

export default Won