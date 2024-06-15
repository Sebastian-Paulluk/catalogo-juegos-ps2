import { games } from "./games";

const getGames =()=>  {
    return games
}


const getGamesOrdererByIndexes =()=> {
    const games = getGames();
    const gamesCollections = {};

    games.forEach(game => {
        const index = game.name.charAt(0);
        if (!gamesCollections[index]) {

            gamesCollections[index] = [];
        }
        gamesCollections[index].push(game);
    });

    return Object.values(gamesCollections);
}


export {getGames, getGamesOrdererByIndexes}


