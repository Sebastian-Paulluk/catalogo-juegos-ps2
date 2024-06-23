import { useEffect, useState } from "react"
import './modal.scss'

export const Modal =({closeModal, openModal, game})=>{
    const [visibility, setVisibility] = useState(openModal)

    useEffect(()=>{
        setVisibility(openModal)
        openModal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')

        return () => {
            document.body.style.overflow = 'auto';
        };
    },[openModal])

    return (
        <div className={`modal ${visibility ? '': 'hidden'}`}>
            <div className='modal-background' onClick={closeModal}></div>
            <div className='modal-content'>
                <div className='modal-img-container'>
                    <img src={game.image} alt={game.name + ' ' + game.sub_name} className='modal-game-image'></img>
                    <span className='close-modal' onClick={closeModal}> X </span>
                </div>
            </div>
        </div>

    )
}