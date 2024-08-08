export const orderGamesByNameAndSubname =(games)=>{
    let sortedGames = [...games];

    sortedGames.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;

        if (a.sub_name < b.sub_name) return -1;
        if (a.sub_name > b.sub_name) return 1;

        return 0;
    });

    return sortedGames;
}