import { useContext } from 'react'
import { CurrentIndexLocationContext } from '../../../context/CurrentIndexLocationContext'
import { useMountingAnimation } from '../../../Hooks/useMountingAnimation'
import './navIndex.scss'

export const NavIndex =({categoryIndex, mountingDelay, onClick})=>{
    const visibility = useMountingAnimation(mountingDelay)
    const {currentIndex} = useContext(CurrentIndexLocationContext)

    return (
        <span
            className={
                `nav-index 
                ${visibility ? '' : 'hidden'}
                ${categoryIndex.toLowerCase() === currentIndex ? 'current' : ''}
                `
            }
            onClick={onClick}
        >
            {categoryIndex}
        </span>
    )}