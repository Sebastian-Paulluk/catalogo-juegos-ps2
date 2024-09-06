import { useContext, useEffect, useState } from 'react';
import listImg from '../../../assets/list.png'
import { Badge } from 'antd';
import { savedGamesContext } from '../../../context/SavedGamesContext';
import './savedGamesWidget.scss'
import { Drawer } from '../../savedGamesDrawer/drawer';

export const SavedGamesWidget =()=>{
    const {totalQuantitySavedGames, savedGames, totalSizeSavedList} = useContext(savedGamesContext);
    const [count, setCount] = useState(totalQuantitySavedGames);
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const hideDrawer = () => setOpen(false);

    useEffect(()=>{
        setCount(totalQuantitySavedGames)
    },[savedGames, totalQuantitySavedGames])
    
    return (
        <div className='saved-games-widget' >
                <Badge
                    count={count}
                    size="middle"
                    offset={[0, 5]}
                    color='purple'
                    onClick={openDrawer}
                >
                <Badge
                    count={ totalQuantitySavedGames() > 0 ? totalSizeSavedList() + ' GB' : ''}
                    size="middle"
                    offset={[-18, 42]}
                    color='geekblue'
                    onClick={openDrawer}
                >
                    <img src={listImg} className='list-img' alt="list" onClick={openDrawer}></img>
                </Badge>
                </Badge>
                <Drawer hideDrawer={hideDrawer} open={open} />
        </div>
    )
}
