

import React from 'react'
import GameCard from '../gameCard/gameCard'
import './gameList.scss'
import IndexCategory from '../indexCategory/indexCategory'

export default function GameList({games}) {

  return (
    <div className='game-list'>
      {games.map( (gameIndexCollection, index) =>(
        <IndexCategory gameIndexCollection={gameIndexCollection} key={index} />
      ))}
    </div>
  )
}
