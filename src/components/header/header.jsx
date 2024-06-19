import React from 'react'
import './header.scss'
import logo from './../../assets/logo.png';
import { SearchInput } from './searchInput/searchInput'
import { Link } from 'react-router-dom'

export const Header =()=>{
    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo-container'>
                    <img src={logo} className='logo'></img>
                    <div className='logo-text'>
                        <span className='brand'>ORION</span>
                        <span className='brand'>COMPUTACIÓN</span>
                        <span className='games-ps2'>JUEGOS PS2</span>
                    </div>
                </div>
            </Link>
            <SearchInput />
            <span>OOO</span>
        </div>
    )
}
