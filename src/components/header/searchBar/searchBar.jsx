import { useEffect, useState } from 'react'
import  './searchBar.scss'
import { SearchInput } from './searchInput/searchInput'

export const SearchBar =({open, hideSearchBar})=>{
    const [cleanInput, setCleanInput] = useState(true)

    const cleanInputContent =()=>{
        setCleanInput(true)
    }

    const handleCloseSearchButtonClick=()=> {
        cleanInputContent()
        hideSearchBar()
    }


    const lockScroll = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const unlockScroll = () => {
        setTimeout(()=>{
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0px'
        }, 150)
    }


    useEffect(() => {
        open ? lockScroll() : unlockScroll()
    }, [open]);



    return (
        <div className={`search-bar-container ${open ? '': 'hidden'}`}>
            <div className='search-bar-background' onClick={hideSearchBar}></div>
            <div className='search-bar'>
                <SearchInput hideSearchBar={hideSearchBar} open={open} cleanInput={cleanInput} setCleanInput={setCleanInput}/>
                <button className='close-search-bar-button' onClick={handleCloseSearchButtonClick}> X </button>
            </div>
        </div>
    )
}