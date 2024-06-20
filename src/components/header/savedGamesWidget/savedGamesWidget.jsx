import { useContext, useEffect, useState } from 'react';
import listImg from '../../../assets/list.png'
import { Badge } from 'antd';
import { savedGamesContext } from '../../../context/SavedGamesContext';
import './savedGamesWidget.scss'
import { SavedGamesDrawer } from '../../savedGamesDrawer/savedGamesDrawer';

export const SavedGamesWidget =()=>{
    const {totalQuantitySavedGames, savedGames, totalSizeSavedList} = useContext(savedGamesContext);
    const [count, setCount] = useState(totalQuantitySavedGames);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    useEffect(()=>{
        setCount(totalQuantitySavedGames)
    },[savedGames, totalQuantitySavedGames])
    
    return (
        <div className='saved-games-widget' >
                <Badge
                    count={count}
                    size="middle"
                    offset={[-30, 5]}
                    color='purple'
                    onClick={showDrawer}
                >
                <Badge
                    count={ totalQuantitySavedGames() > 0 ? totalSizeSavedList() + ' GB' : ''}
                    size="middle"
                    offset={[5, 30]}
                    color='geekblue'
                    onClick={showDrawer}
                >
                    <img src={listImg} className='list-img' alt="list" onClick={showDrawer}></img>
                </Badge>
                </Badge>
                <SavedGamesDrawer onClose={onClose} open={open} />
        </div>
    )
}
