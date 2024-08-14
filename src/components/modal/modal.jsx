import { useEffect, useState } from "react"
import './modal.scss'

export const Modal =({onClose, open, game, handleScrollBar=true})=>{
    const [visibility, setVisibility] = useState(open)

    const lockScroll = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const unlockScroll = () => {
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0px'
    }
    
    useEffect(() => {
        setVisibility(open)
        if (handleScrollBar) {
            open ? lockScroll() : unlockScroll()
        }
        
        return () => handleScrollBar && unlockScroll()
    }, [open, handleScrollBar]);

    return (
        <div className={`modal ${visibility ? '': 'hidden'}`}>
            <div className='modal-background' onClick={onClose}></div>
            <div className='modal-content'>
                <div className='modal-img-container'>
                    <img src={game.image} alt={game.name + ' ' + game.sub_name} className='modal-game-image'></img>
                    <span className='close-modal' onClick={onClose}> X </span>
                </div>
            </div>
        </div>

    )
}