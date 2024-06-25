import { useContext, useEffect, useState } from "react"
import './drawer.scss'
import { DrawerGameCard } from "./drawerGameCard/drawerGameCard"
import { PersonalizedButton } from "../button/button"
import { message } from "antd"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { savedGamesContext } from "../../context/SavedGamesContext"

/* USO:

    En el componente desde donde se llamará al Drawer, usar un estado
    y funciones que servirán para manejar la apertura y el cierre:  

        const [open, setOpen] = useState(false);

        const openDrawer = () => setOpen(true);
        const hideDrawer = () => setOpen(false);

    Agregar en el return del componente la propiedad onClick que
    ejecutará la apertura del Drawer:

        onClick={openDrawer}

    Dentro del componente, en el return (puede ser antes al final del
    componente), llamar al Drawer:

    <Drawer hideDrawer={hideDrawer} open={open} />
*/

export const Drawer =({open, hideDrawer})=>{
    const [visibility, setVisibility] = useState(open)
    const [messageApi, contextHolder] = message.useMessage();
    const {savedGames,savedGameslistIsEmpty, clearSavedGamesList, getSavedGamesList} = useContext(savedGamesContext)

    const lockScroll = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '0px';    
    }

    const unlockScroll = () => {
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0px'
    }

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
        setVisibility(open)
        open ? lockScroll() : unlockScroll()

        return () => unlockScroll()
    }, [open]);

    const drawerContent = {
        title:'Juegos guardados',
    }

    return (
        <div className={`drawer ${visibility ? '': 'hidden'}`}>
            <div className='drawer__background' onClick={hideDrawer} />
            <div className='drawer__menu'>
                <div className='drawer__menu__header'>
                    <div className='drawer__menu__header__title'> {drawerContent.title} </div>
                    <button className='drawer__menu__header__close-button' onClick={hideDrawer}> X </button>
                </div>
                <div className='drawer__menu__content'>
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
                </div>
            </div>
        </div>
    )
}