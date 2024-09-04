import Nav from '../nav/nav'
import './mainContainer.scss'
import React, { useEffect, useState } from 'react'
import { getGames } from '../../services/firebase'
import { groupGamesByIndex } from '../../functions/groupGamesByIndex'
import GameList from '../gameList/gameList'
import { LoadingScreen } from '../loadingScreen/loadingScreen'
import { CategoryIndexLocationContextProvider } from '../../context/CategoryIndexLocationContext'

export default function MainContainer() {
  const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getGames()
            .then( response => {
                setGames(groupGamesByIndex(response))
                setIsLoading(false)
            })
    }, [])

  return (
    <div className='main-container'>
      { isLoading ? (
          <LoadingScreen />
        ) : (                        
          <>
            <CategoryIndexLocationContextProvider>
              <Nav games={games} />
              <GameList games={games} />
            </CategoryIndexLocationContextProvider>
          </>
          )
        }
    </div>
  )
}
