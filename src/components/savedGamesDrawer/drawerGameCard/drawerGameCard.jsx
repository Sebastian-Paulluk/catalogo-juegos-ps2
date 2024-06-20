import { useMountingAnimation } from '../../../Hooks/useMountingAnimation'
import { capitalizeWords } from '../../../functions/capitalizeWords'
import './drawerGameCard.scss'
import discardImg from '../../../assets/trash.png'
import { useContext } from 'react'
import { savedGamesContext } from '../../../context/SavedGamesContext'

export const DrawerGameCard =({game, mountingDelay})=>{
    const {removeGameFromSavedList} = useContext(savedGamesContext)
    const visibility = useMountingAnimation(mountingDelay)

    const handleRemoveGameClick =(game)=>{
        removeGameFromSavedList(game)
    }

    return(
        <div className={`drawer-game-card ${visibility ? '' : 'hidden'}`}>
            <div className='img-container'>
                <img src={game.image} alt={game.name}></img>
            </div> 
            <div className='name-container'>
                <span className='name'>{capitalizeWords(game.name)}</span>
                <span>{capitalizeWords(game.sub_name)}</span>
            </div>
            <div className='info-container'>
                <span>Idioma: {capitalizeWords(game.language)}</span>
                <span>Peso: {game.size + ' GB'}</span>
            </div>
            <img className='discard-img' src={discardImg} onClick={()=>handleRemoveGameClick(game)} alt='discard'></img>
        </div>
    )
}