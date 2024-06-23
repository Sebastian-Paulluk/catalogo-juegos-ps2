import { capitalizeWords } from '../../../functions/capitalizeWords'
import './drawerGameCard.scss'
import discardImg from '../../../assets/trash.png'
import { useContext, useEffect, useState } from 'react'
import { savedGamesContext } from '../../../context/SavedGamesContext'

export const DrawerGameCard =({game, mountingDelay, open})=>{
    const {removeGameFromSavedList} = useContext(savedGamesContext)
    const [cardVisibility, setCardVisibility] = useState(false);
    const [detailsVisibility, setDetailsVisibility] = useState(false);

    useEffect (()=>{
        if (open) {
            const timerIdCardVisibility = setTimeout(()=>{
                setCardVisibility(true)
            }, mountingDelay * 1000)

            const timerIdDetailsVisibility = setTimeout(()=>{
                setDetailsVisibility(true)
            }, (mountingDelay * 1000) + 100)

            return () => {
                setCardVisibility(false)
                setDetailsVisibility(false)
                clearTimeout(timerIdCardVisibility)
                clearTimeout(timerIdDetailsVisibility)
            }
        } else {
            setCardVisibility(false)
            setDetailsVisibility(false)
        }
    }, [mountingDelay, open]);



    const handleRemoveGameClick =(game)=>{
        removeGameFromSavedList(game)
    }

    return(
        <div className={`drawer-game-card ${cardVisibility ? '' : 'hidden'}`}>
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
            <img className={`discard-img ${detailsVisibility ? '' : 'hidden'}`} src={discardImg} onClick={()=>handleRemoveGameClick(game)} alt='discard'></img>
        </div>
    )
}