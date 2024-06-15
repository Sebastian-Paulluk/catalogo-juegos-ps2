import Nav from '../nav/nav'
import './mainContainer.scss'
import React, { useEffect, useState } from 'react'
import { getGames } from '../../services/firebase'
import { groupGamesByIndex } from '../../functions/groupGamesByIndex'
import GameList from '../gameList/gameList'
import { Loading } from '../loading/loading'

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
          <Loading />
        ) : (                        
          <>
            <GameList games={games} />
            <Nav games={games} />
          </>
          )
        }
    </div>
  )
}
