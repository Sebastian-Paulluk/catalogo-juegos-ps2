import { useMountingAnimation } from '../../../Hooks/useMountingAnimation'
import './navIndex.scss'

export const NavIndex =({categoryIndex, mountingDelay})=>{
    const visibility = useMountingAnimation(mountingDelay)
    
    return <span className={`nav-index ${visibility ? '' : 'hidden'}`}>{categoryIndex}</span>
}