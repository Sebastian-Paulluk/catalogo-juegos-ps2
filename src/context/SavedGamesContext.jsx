import { createContext, useEffect, useState } from "react";
import { customRound } from "../functions/roundNumber";

export const savedGamesContext = createContext();

export const SavedGamesProvider = ({children}) =>{
    const [savedGames, setSavedGames] = useState([]);
    const [savedGamesInitialized, setSavedGamesInitialized] = useState(false);

    useEffect(()=>{
        const localWishlist = localStorage.getItem('savedGames');
        localWishlist && setSavedGames(JSON.parse(localWishlist));
        setSavedGamesInitialized(true);
    },[]);

    useEffect(()=>{
        savedGamesInitialized && localStorage.setItem(
            'savedGames', JSON.stringify(savedGames)
        );
    },[savedGames, savedGamesInitialized]);

    
    const gameInSavedList =(game)=>{
        const foundGame = savedGames.find(gameInSavedList => gameInSavedList.id === game.id);
        return foundGame !== undefined;
    }


    const savedGameslistIsEmpty =()=> {
        return savedGames.length === 0;
    }


    const totalQuantitySavedGames =()=>{
        return savedGames.length;
    }

    const totalSizeSavedList = () =>{
        let acum = 0
        savedGames.forEach(game => acum += game.size )
        
        return customRound(acum)
    }
    


    const removeGameFromSavedList =(gameToRemove)=>{
        const gameIndex = savedGames.findIndex(gameInSavedList => gameInSavedList.id === gameToRemove.id);
        
        const updatedSavedGamesList = [...savedGames];
        updatedSavedGamesList.splice(gameIndex, 1);
        setSavedGames(updatedSavedGamesList)
    }


    const toggleGameOnSavedList =(game)=>{
        if (!gameInSavedList(game)) {
            setSavedGames([...savedGames, game])
        } else {
            const gameIndex = savedGames.findIndex(gameInSavedList => gameInSavedList.id === game.id);
        
            const updatedSavedList = [...savedGames];
            updatedSavedList.splice(gameIndex, 1);
            setSavedGames(updatedSavedList)
        }
    }

    const emptySavedGamesList =()=>{
        setSavedGames([]);
    }

    return (
        <savedGamesContext.Provider value={{
            savedGames,
            gameInSavedList,
            savedGameslistIsEmpty,
            removeGameFromSavedList,
            toggleGameOnSavedList,
            totalQuantitySavedGames,
            emptySavedGamesList,
            totalSizeSavedList
        }}>
            {children}
        </savedGamesContext.Provider>
    )
}