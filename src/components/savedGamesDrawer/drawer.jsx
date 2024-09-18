import { useContext, useEffect, useState } from "react"
import './drawer.scss'
import './popConfirmStyles.scss'
import { DrawerGameCard } from "./drawerGameCard/drawerGameCard"
import { message } from "antd"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { savedGamesContext } from "../../context/SavedGamesContext"
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

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
    const {savedGames,savedGameslistIsEmpty, clearSavedGamesList, getSavedGamesList, totalQuantitySavedGames, totalSizeSavedList} = useContext(savedGamesContext)

    const lockScroll = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`
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
                    <div className="drawer__menu__header__head">
                        <div className='drawer__menu__header__head__title'> {drawerContent.title} </div>
                        <button className='drawer__menu__header__head__close-button' onClick={hideDrawer}> X </button>
                    </div>
                    {contextHolder}
                    <div className="drawer__menu__header__bottom">
                        { savedGameslistIsEmpty() ? (
                                <div className="no-saved-games-text">No hay juegos guardados</div>
                            ) : (
                                <>
                                    <div className="drawer__menu__header__bottom__info">
                                        <span className="games-quantity">{totalQuantitySavedGames()} {totalQuantitySavedGames() > 1 ? 'juegos' : 'juego'}</span>
                                        <span className="total-size">{totalSizeSavedList()} GB</span>
                                    </div>
                                    <div className="drawer__menu__header__bottom__drawer-options">
                                        { totalQuantitySavedGames() > 0 && 
                                            <>
                                                <CopyToClipboard text={getSavedGamesList()}>
                                                    <button className="drawer__menu__header__bottom__drawer-options__copy-list-button" onClick={success}>Copiar lista</button>
                                                </CopyToClipboard>
                                                <Popconfirm
                                                    placement="bottomRight"
                                                    title='¿Descartar todos los juegos?'
                                                    okText="Si"
                                                    cancelText="No"
                                                    onConfirm={clearSavedGamesList}
                                                    icon={<QuestionCircleOutlined style={{color: 'red',}}/>}
                                                >
                                                    <button className="drawer__menu__header__bottom__drawer-options__empty-list-button">Vaciar lista</button>
                                                </Popconfirm>
                                            </>
                                        }
                                    </div>
                                </>
                            )
                        }
                        
                    </div>
                </div>
                <div className='drawer__menu__content'>
                    { !savedGameslistIsEmpty() && 
                        <>
                            {savedGames.map((game, index) => {
                                return  <DrawerGameCard game={game} key={game.id} closeDrawer={hideDrawer} open={open}/>
                            })}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}