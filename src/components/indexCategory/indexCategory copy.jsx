import React from 'react'
import GameCard from '../gameCard/gameCard'
import './indexCategory.scss'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation'

export default function IndexCategory({gameIndexCollection}) {
  const index = gameIndexCollection.name
  const games = gameIndexCollection.games
  const visibility = useMountingAnimation()

  return (
    <div className='index-category'>
      <div className={`index-title ${visibility ? '' : 'hidden'}`}>{index.toUpperCase()}</div>
      <div className='index-games'>
        {games.map( (game, index) =>{
          const mountingDelay = (index + 1) * 0.03;
            return <GameCard game={game} key={game.id} mountingDelay={mountingDelay}/>
          })}
      </div>
    </div>
  )
}


