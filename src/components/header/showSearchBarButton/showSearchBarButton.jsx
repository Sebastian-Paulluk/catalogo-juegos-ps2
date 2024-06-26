import './showSearchBarButton.scss'
import searchIcon from '../../../assets/search.png';
import { useState } from 'react';
import { SearchBar } from '../searchBar/searchBar';

export const ShowSearchBarButton =()=>{
    const [open, setOpen] = useState(false);

    const openSearchBar = () => setOpen(true);
    const hideSearchBar = () => setOpen(false);

    return (
        <>
            <button className="show-search-bar-button" onClick={openSearchBar}>
                <img src={searchIcon} alt='search-button'></img>
            </button>
            <SearchBar open={open} hideSearchBar={hideSearchBar} />
        </>
    )
}