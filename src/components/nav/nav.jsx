import React, { useContext, useEffect, useState } from 'react'
import './nav.scss'
import { groupGamesByIndex } from '../../functions/groupGamesByIndex'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation'
import { NavIndex } from './navIndex/navindex'
import { CategoryIndexLocationContext } from '../../context/CategoryIndexLocationContext'
import arrowUp from './../../assets/double-arrow-up.png';

export default function Nav({games}) {
    const [indexes, setIndexes] = useState([])
    const startVisibility = useMountingAnimation()
    const [isVisible, setIsVisible] = useState(true)
    const {changeCurrentLocation} = useContext(CategoryIndexLocationContext)

    const getAllIndexes =gamesCollection=> {
        let indexesCollection = []

        gamesCollection.forEach( indexCollection =>{
            indexesCollection.push(indexCollection.name.toUpperCase())
        })
        return indexesCollection
    }

    useEffect(()=>{
        setIndexes(getAllIndexes(groupGamesByIndex(games)))
    },[games])


    useEffect(()=>{
        const storedVisibility = sessionStorage.getItem('navVisibility')
        if (storedVisibility) {
            setIsVisible(JSON.parse(storedVisibility))
        } else {
            setIsVisible(true)
        }
    },[])


    useEffect(()=>{
        sessionStorage.setItem('navVisibility', JSON.stringify(isVisible))
    },[isVisible])


    const handleToggleVisibility =()=>{
        setIsVisible(!isVisible)
    }

    return (
        <>
            <button className={`toggle-nav-display-button ${isVisible ? 'nav-visible' : 'nav-hidden'} ${startVisibility ? '' : 'hidden'}`} onClick={handleToggleVisibility}>
                <img className='toggle-nav-display-img' src={arrowUp} alt='arrow-up' />
            </button>
            <nav className={`nav ${startVisibility && isVisible ? '' : 'hidden'}`}>
                {indexes.map((categoryIndex, index) =>{
                    const mountingDelay = (index + 1) * 0.03;
                    return (
                        <NavIndex 
                            key={index}
                            categoryIndex={categoryIndex}
                            mountingDelay={mountingDelay}
                            onClick={() => changeCurrentLocation(categoryIndex)}/>
                    )
                })}
            </nav>
        </>
        
    )
}
