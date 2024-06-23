const orderIndexesCollection = indexesCollection =>{
    indexesCollection.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
}

const groupGamesByIndex = games => {
    let indexesCollection = []

    games.forEach(game => {
        let index = game.name.charAt(0)
        let found = false

        if (!isNaN(index)) {
            index = "0-9";
        }

        indexesCollection.forEach( indexCollection =>{
            if (indexCollection.name === index) {
                indexCollection.games.push(game)
                found = true
            }
        })

        if (!found) {
            indexesCollection.push({name:index, games:[game]})
        }
    });

    orderIndexesCollection(indexesCollection)
    return indexesCollection
}

export {groupGamesByIndex}