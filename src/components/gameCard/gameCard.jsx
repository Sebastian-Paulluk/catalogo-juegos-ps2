import React, { useContext, useEffect, useState } from 'react'
import './gameCard.scss'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation'
import { PersonalizedButton } from '../button/button'
import { capitalizeWords } from '../../functions/capitalizeWords'
import { savedGamesContext } from '../../context/SavedGamesContext'
import { Modal } from '../modal/modal'

export default function GameCard({game, mountingDelay}) {
    const {toggleGameOnSavedList, gameInSavedList, savedGames} = useContext(savedGamesContext)
    const [savedState, setSavedState] = useState(gameInSavedList(game));
    const [openModal, setOpenModal] = useState(false)

    const visibility = useMountingAnimation(mountingDelay)
    const name = game.name && capitalizeWords(game.name)
    const language = game.language && capitalizeWords(game.language)

    useEffect(()=>{
        setSavedState(gameInSavedList(game))
    }, [savedGames, gameInSavedList, game])

    
    const handleSaveGameClick =(game)=>{
        toggleGameOnSavedList(game)
    }

    const handleOpenModal =()=>{
        setOpenModal(true)
    }

    const handleCloseModal =()=>{
        setOpenModal(false)
    }

    return (
        <>
            <div className={`game-card ${visibility ? '' : 'hidden'} ${gameInSavedList(game) ? 'saved' : ''}`}>
                <div className='img-container'>
                    <img src={game.image} alt={`${game.name} ${game.sub_name}`} onClick={handleOpenModal}></img>
                </div>
                <span className='name'>{name}</span>
                { game.sub_name === '' ? (
                        <></>
                    ) : (
                        <span className='sub-name'>{capitalizeWords(game.sub_name)}</span>
                    )
                }
                <span className='language'>Idioma: {language}</span>
                <span className='size'>Peso: {game.size} GB</span>
                <PersonalizedButton content={savedState ? 'Descartar' : 'Guardar'} onClick={()=>handleSaveGameClick(game)}/>
            </div>
            <Modal onClose={handleCloseModal} open={openModal} game={game} />
        </>    
    )
}
