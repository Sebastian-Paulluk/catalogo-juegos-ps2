import React from 'react'
import './gameCard.scss'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation'
import { Button } from '../button/button'
import { capitalizeWords } from '../../functions/capitalizeWords'

export default function GameCard({game, mountingDelay}) {
    const visibility = useMountingAnimation(mountingDelay)

    const name = game.name && capitalizeWords(game.name)
    const language = game.language && capitalizeWords(game.language)

    return (
        <div className={`game-card ${visibility ? '' : 'hidden'}`}>
            <div className='img-container'>
                <img src={game.image}></img>
            </div>
            <span className='name'>{name}</span>
            { game.sub_name == '' ? (
                    <></>
                ) : (
                    <span className='sub-name'>{capitalizeWords(game.sub_name)}</span>
                )
            }
            <span className='language'>Idioma: {language}</span>
            <span className='size'>Peso: {game.size} GB</span>
            <Button content={'Guardar'}/>
        </div>
    )
}
