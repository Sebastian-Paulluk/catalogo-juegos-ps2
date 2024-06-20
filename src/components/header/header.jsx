import React from 'react'
import './header.scss'
import logo from './../../assets/logo.png';
import { SearchInput } from './searchInput/searchInput'
import { Link } from 'react-router-dom'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import { SavedGamesWidget } from './savedGamesWidget/savedGamesWidget';

export const Header =()=>{
    const visibility = useMountingAnimation()

    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo-container'>
                    <img src={logo}  className={`logo ${visibility ? '' : 'hidden'}`}></img>
                    <div className='logo-text'>
                        <span className={`brand-top ${visibility ? '' : 'hidden'}`} >ORION</span>
                        <span className={`brand-bottom ${visibility ? '' : 'hidden'}`} >COMPUTACIÓN</span>
                        <span className={`games-ps2 ${visibility ? '' : 'hidden'}`}>JUEGOS PS2</span>
                    </div>
                </div>
            </Link>
            <SearchInput />
            <SavedGamesWidget />
        </div>
    )
}
