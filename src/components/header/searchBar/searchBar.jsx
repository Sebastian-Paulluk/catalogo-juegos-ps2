import { useEffect, useState } from 'react'
import  './searchBar.scss'
import { SearchInput } from './searchInput/searchInput'

export const SearchBar =({open, hideSearchBar})=>{
    const [visibility, setVisibility] = useState(open)

    const lockScroll = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const unlockScroll = () => {
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0px'
    }

    useEffect(() => {
        setVisibility(open)
        open ? lockScroll() : unlockScroll()
        return () => unlockScroll()
    }, [open]);


    return (
        <div className={`search-bar-container ${visibility ? '': 'hidden'}`}>
            <div className='search-bar-background' onClick={hideSearchBar}></div>
            <div className='search-bar'>
                <SearchInput />
            </div>
        </div>
    )
}