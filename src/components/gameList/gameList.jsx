import React, { useContext, useEffect, useRef } from 'react'
import './gameList.scss'
import IndexCategory from '../indexCategory/indexCategory'
import { CategoryIndexLocationContext } from '../../context/CategoryIndexLocationContext'

export default function GameList({games}) {
  const { currentLocation, forceUpdate } = useContext(CategoryIndexLocationContext)
  
  const refs = useRef({})

  useEffect(() => {
    const element = refs.current[currentLocation]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      const offset = 100
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }, [currentLocation, forceUpdate])

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
