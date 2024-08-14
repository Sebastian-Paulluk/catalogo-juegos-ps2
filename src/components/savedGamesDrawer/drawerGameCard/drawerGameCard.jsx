import { capitalizeWords } from '../../../functions/capitalizeWords'
import './drawerGameCard.scss'
import discardImg from '../../../assets/trash.png'
import { useContext, useState} from 'react'
import { savedGamesContext } from '../../../context/SavedGamesContext'
import { Modal } from '../../modal/modal'

export const DrawerGameCard =({game})=>{
    const {removeGameFromSavedList} = useContext(savedGamesContext)
    const [openModal, setOpenModal] = useState(false);

    const handleRemoveGameClick =(game)=>{
        removeGameFromSavedList(game)
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return(
        <div className={`drawer-game-card`}>
            <div className='img-container'>
                <img src={game.thumbnail} alt={game.name} onClick={handleOpenModal}></img>
            </div> 
            <div className='name-container'>
                <span className='name'>{capitalizeWords(game.name)}</span>
                <span>{capitalizeWords(game.sub_name)}</span>
            </div>
            <div className='info-container'>
                <div className='language-container'>
                    <span>{capitalizeWords(game.language)}</span>
                </div>
                <div className='game-size-container'>
                    <span>{game.size + ' GB'}</span>
                </div>
            </div>
            <div className='discard-button'>
                <img className={`discard-img `} src={discardImg} onClick={()=>handleRemoveGameClick(game)} alt='discard'></img>
            </div>
            <Modal onClose={handleCloseModal} open={openModal} handleScrollBar={false} game={game} />
        </div>
    )
}