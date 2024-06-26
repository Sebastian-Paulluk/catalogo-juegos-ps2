import './searchInput.scss';
import searchIcon from '../../../../assets/search.png'
import { useRef, useState } from 'react';
 import { useNavigate } from 'react-router-dom';

export const SearchInput =()=>{
     const navigate = useNavigate(); 
    const [clearIconHidden, setClearIconHidden] = useState(true)
    const inputRef = useRef(null);

    const search =searchTerm=> {
        navigate(`/search/${searchTerm}`);
    }; 

    const handleSearchInput=(event)=>{
        const searchTerm = inputRef.current.value;
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            search(searchTerm);
        }
    };

    const handleSearchClick=()=>{
        const searchTerm = inputRef.current.value;
        if (searchTerm.trim() !== '') {
            search(searchTerm);
        }
    };

    const handleInputChange =()=>{
        const searchTerm = inputRef.current.value;
        setClearIconHidden(searchTerm.trim() === '')
    }

    const handleClearClick =()=>{
        inputRef.current.value = '';
        setClearIconHidden(true);
    }


    return (
        <div className='search-product-input-container'>

            <input 
                ref={inputRef}
                type='text'
                className='search-product-input'
                placeholder='Buscar juego...'
                onKeyDown={handleSearchInput}
                onChange={handleInputChange}
                name='search-product-input'
            >
            </input>

            <span 
                className={`clear-icon  ${clearIconHidden ? 'hidden' : ''}`}
                onClick={handleClearClick}
                title='Limpiar cuadro de búsqueda'
            >
                X
            </span>

            <button
                className='search-button'
                onClick = {handleSearchClick}
                title='Buscar'
            >
                <img src={searchIcon} alt='Search icon'></img>
            </button>

        </div>
    )
}