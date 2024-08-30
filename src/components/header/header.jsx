import React from 'react'
import './header.scss'
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import { SavedGamesWidget } from './savedGamesWidget/savedGamesWidget';
import { ShowSearchBarButton } from './showSearchBarButton/showSearchBarButton';

export const Header =()=>{
    const visibility = useMountingAnimation()

    return (
        <div className='header'>
            <div className='header__backgorund-effect'/>
            <div className='header__content'>
                <Link to='/'>
                    <div className='logo-container'>
                        <img src={logo} alt='logo' className={`logo ${visibility ? '' : 'hidden'}`}></img>
                        <div className='logo-text'>
                            <span className={`brand-top ${visibility ? '' : 'hidden'}`} >ORION</span>
                            <span className={`brand-bottom ${visibility ? '' : 'hidden'}`} >COMPUTACIÓN</span>
                            <span className={`games-ps2 ${visibility ? '' : 'hidden'}`}>JUEGOS PS2</span>
                        </div>
                    </div>
                </Link>
                <ShowSearchBarButton />
                <SavedGamesWidget />
            </div>
            
        </div>
    )
}
