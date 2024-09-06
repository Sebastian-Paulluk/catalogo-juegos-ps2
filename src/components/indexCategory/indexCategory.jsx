import React, { forwardRef, useEffect, useContext, useRef } from 'react'
import GameCard from '../gameCard/gameCard'
import './indexCategory.scss'
import { CategoryTitle } from '../categoryTitle/categoryTitle'
import { orderGamesByNameAndSubname } from '../../functions/orderGamesByNameAndSubname'
import { CurrentIndexLocationContext } from '../../context/CurrentIndexLocationContext'
import useIntersectionObserver from '../../Hooks/intersectionObserver'

const IndexCategory = forwardRef(({ gameIndexCollection }, ref) => {
  const index = gameIndexCollection.name
  const games = gameIndexCollection.games
  const orderedGames = orderGamesByNameAndSubname(games)
  const {changeCurrentLocation} = useContext(CurrentIndexLocationContext)


  // Usa el hook para obtener la referencia del Intersection Observer y el estado de visibilidad
  const [observerRef, isVisible] = useIntersectionObserver({
    root: null, // El viewport
    rootMargin: '-206px 0px -800px 0px',
    threshold: 0 // Ajusta el umbral de visibilidad
  });

  // Crea una ref combinada
  const combinedRef = useRef(null);

  // Función ref para asignar las dos refs
  const setRefs = (node) => {
    combinedRef.current = node;
    observerRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  useEffect(() => {
    if (isVisible) {
      changeCurrentLocation(index);
    }
  }, [isVisible]);

  console.log(index + ' ' + isVisible)
  
  return (
    <div className='index-category' ref={setRefs}>
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