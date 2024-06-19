import { useEffect, useState } from 'react';
import './searchScreen.scss'
import { Link, useParams } from "react-router-dom";
import { getGamesByNameOrSubName } from '../../services/firebase';
import { LoadingScreen } from '../loadingScreen/loadingScreen';
import GameCard from '../gameCard/gameCard';
import { CategoryTitle } from '../categoryTitle/categoryTitle';
import { NoMatchesScreen } from './noMatchesScreen/noMatchesScreen';

export const SearchScreen =()=> {
    const {searchedText} = useParams()
    const [filteredGames, setFilteredGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{

        getGamesByNameOrSubName(searchedText)
            .then(response => {
                setFilteredGames(response)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

        return () => setIsLoading(true)
    }, [searchedText])

    return (
        <>
            { isLoading ? (
                <LoadingScreen />
            ) : (
                
                filteredGames.length == 0 ? (
                    <NoMatchesScreen searchedText={searchedText}/>
                ) : (

                    <div className='search-screen'>
                        <CategoryTitle title={'Buscando: ' + searchedText} search={true} style={{ display: 'flex', justifyContent: 'center' }}  />
                        {filteredGames.map((game, index) => {
                            const mountingDelay = (index + 1) * 0.03
                            return <GameCard game={game} key={game.id} mountingDelay={mountingDelay} />
                        })}
                    </div>
                )
            )}
        </>
    )
}
