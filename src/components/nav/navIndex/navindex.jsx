import { useMountingAnimation } from '../../../Hooks/useMountingAnimation'
import './navIndex.scss'

export const NavIndex =({categoryIndex, mountingDelay, onClick})=>{
    const visibility = useMountingAnimation(mountingDelay)
    
    return (
        <span
            className={`nav-index ${visibility ? '' : 'hidden'}`}
            onClick={onClick}
        >
            {categoryIndex}
        </span>
    )}