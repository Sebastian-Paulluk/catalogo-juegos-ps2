import React, { useContext, useEffect, useRef, useState } from 'react';
import './gameCard.scss';
import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import { capitalizeWords } from '../../functions/capitalizeWords';
import { savedGamesContext } from '../../context/SavedGamesContext';
import { Modal } from '../modal/modal';
import radioUnchecked from './../../assets/radio-unchecked.png';
import radioChecked from './../../assets/radio-checked.png';
import arrowUp from './../../assets/double-arrow-up.png';

export default function GameCard({game, mountingDelay}) {
    const {toggleGameOnSavedList, gameInSavedList, savedGames} = useContext(savedGamesContext);
    const [savedState, setSavedState] = useState(gameInSavedList(game));
    const [openModal, setOpenModal] = useState(false);
    const [openGameInfoPanel, setOpenGameInfoPanel] = useState(false);
    const cardRef = useRef(null); // Ref para la GameCard

    const visibility = useMountingAnimation(mountingDelay);
    const name = game.name && capitalizeWords(game.name);
    const language = game.language && capitalizeWords(game.language);

    useEffect(()=>{
        setSavedState(gameInSavedList(game));
    }, [savedGames, gameInSavedList, game]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setOpenGameInfoPanel(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSaveGameClick = (game) => {
        toggleGameOnSavedList(game);
        setOpenGameInfoPanel(false)
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleToggleGameInfoPanel = () => {
        setOpenGameInfoPanel(!openGameInfoPanel);
    };

    return (
        <>
            <div ref={cardRef} className={`game-card ${visibility ? '' : 'hidden'} ${gameInSavedList(game) ? 'saved' : ''}`}>
                <img className='game-card-image' src={game.thumbnail} alt={`${game.name} ${game.sub_name}`} onClick={handleOpenModal}></img>
                <div className={`info-container ${openGameInfoPanel ? 'open' : ''}`}>
                    <span className='name'>{name}</span>
                    { game.sub_name === '' ? (
                            <></>
                        ) : (
                            <span className='sub-name'>{capitalizeWords(game.sub_name)}</span>
                        )
                    }
                    <span className='language-and-size'>{language} / {game.size} GB</span>
                    <button className='open-info-container-button' onClick={handleToggleGameInfoPanel}>
                        <img className='open-info-panel-button-img' src={arrowUp} alt='arrow-up'></img>
                    </button>
                </div>
                <img className={`save-game-button ${savedState ? '' : 'hidden'}`} src={radioChecked} onClick={()=>handleSaveGameClick(game)} alt='save-game-button'></img>
                <img className={`drop-game-button ${savedState ? 'hidden' : ''}`} src={radioUnchecked} onClick={()=>handleSaveGameClick(game)} alt='drop-game-button'></img>
            </div>
            <Modal onClose={handleCloseModal} open={openModal} game={game} />
        </>
    );
}