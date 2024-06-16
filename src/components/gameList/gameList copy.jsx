import React, { useContext, useEffect, useRef } from 'react'
import './gameList.scss'
import IndexCategory from '../indexCategory/indexCategory'

export default function GameList({games}) {
  const { currentLocation } = useContext(CategoryIndexLocationContext)
  const refs = useRef({})

  useEffect(() => {
    if (refs.current[currentLocation]) {
      refs.current[currentLocation].scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentLocation])

  return (
    <div className='game-list'>
      {games.map( (gameIndexCollection, index) =>(
        <IndexCategory
          key={index}
          gameIndexCollection={gameIndexCollection}
          ref={element => refs.current[gameIndexCollection.name.toUpperCase()] = element}
        />
      ))}
    </div>
  )
}
