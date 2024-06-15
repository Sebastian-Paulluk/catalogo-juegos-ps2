import React from 'react'
import './gameCard.scss'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation'
import { Button } from '../button/button'

export default function GameCard({game, mountingDelay}) {
    const visibility = useMountingAnimation(mountingDelay)

    return (
        <div className={`game-card ${visibility ? '' : 'hidden'}`}>
            <div className='img-container'>
                <img src={game.image}></img>
            </div>
            <span className='name'>{game.name}</span>
            <span className='sub-name'>{game.sub_name}</span>
            <span className='language'>Idioma: {game.language}</span>
            <span className='size'>Peso: {game.size} GB</span>
            <Button content={'Guardar'}/>
        </div>
    )
}
