import {  Drawer, message } from "antd"
import { useContext, useEffect } from "react"
import { savedGamesContext } from "../../context/SavedGamesContext"
import './savedGamesDrawer.scss'
import { DrawerGameCard } from "./drawerGameCard/drawerGameCard"
import { PersonalizedButton } from "../button/button"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { lockScroll, unlockScroll } from "../../utils/scroll"

export const SavedGamesDrawer =({open, onClose})=>{
    const {savedGames,savedGameslistIsEmpty, clearSavedGamesList, getSavedGamesList} = useContext(savedGamesContext)
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Lista copiada al portapeles',
          style: {
            position: 'fixed', 
            top: '20px', 
            left: '20px', 
            margin: 0,
          },
        });
      };


    useEffect(() => {
        if (open) {
            lockScroll();
        } else {
            unlockScroll();
        }

        return () => {
            unlockScroll();
        };
    }, [open]);

    return (
        <Drawer
            title={
                <div style={{  width: '100%', textAlign: 'center'}}>
                    <span>Juegos guardados</span>
                </div>
            }
            placement={'left'}
            width={400}
            onClose={onClose}
            open={open}
            className='saved-games-drawer'
            style={{
                color: 'white',
                backgroundColor: 'black',
                borderRight: '1px solid gray',
                
            }}
        >
            { savedGameslistIsEmpty() ? (
                   <div className="no-saved-games-text">No hay juegos guardados</div>
                ) : (
                    <>
                        {contextHolder}
                        <div className="drawer-options">
                        <CopyToClipboard text={getSavedGamesList()}>
                            <PersonalizedButton content='Copiar lista' onClick={success}/>
                        </CopyToClipboard>
                        <PersonalizedButton content='Eliminar todo' onClick={()=>clearSavedGamesList()} />
                        </div>

                        {savedGames.map((game, index) => {
                            const mountingDelay = (index + 1) * 0.03
                            return  <DrawerGameCard game={game} key={game.id} mountingDelay={mountingDelay} open={open}/>
                        })}
                    </>
                )
            }
        </Drawer>
    )
}