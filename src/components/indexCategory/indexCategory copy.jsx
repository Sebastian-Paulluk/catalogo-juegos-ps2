import React, { forwardRef } from 'react'
import GameCard from '../gameCard/gameCard'
import './indexCategory.scss'
import { CategoryTitle } from '../categoryTitle/categoryTitle'
import { orderGamesByNameAndSubname } from '../../functions/orderGamesByNameAndSubname'

const IndexCategory = forwardRef(({ gameIndexCollection }, ref) => {
  const index = gameIndexCollection.name
  const games = gameIndexCollection.games
  const orderedGames = orderGamesByNameAndSubname(games)

  return (
    <div className='index-category' ref={ref}>
      <CategoryTitle title={index.toUpperCase()} />
      <div className='index-games'>
        {orderedGames.map((game, index) => {
          const mountingDelay = (index + 1) * 0.03
          return <GameCard
                    game={game} 
                    key={game.id} 
                    mountingDelay={mountingDelay} 
                  />
        })}
      </div>
    </div>
  )
})

export default IndexCategory