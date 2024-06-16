import React, { useContext, useEffect, useState } from 'react'
import './nav.scss'
import { groupGamesByIndex } from '../../functions/groupGamesByIndex'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation'
import { NavIndex } from './navIndex/navindex'
import { CategoryIndexLocationContext } from '../../context/CategoryIndexLocationContext'


export default function Nav({games}) {
    const [indexes, setIndexes] = useState([])
    const visibility = useMountingAnimation()
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

    return (
        <nav className={`nav ${visibility ? '' : 'hidden'}`}>
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
    )
}
