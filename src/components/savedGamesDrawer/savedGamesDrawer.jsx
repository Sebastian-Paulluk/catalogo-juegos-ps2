import { Drawer } from "antd"
import { useContext } from "react"
import { savedGamesContext } from "../../context/SavedGamesContext"
import './savedGamesDrawer.scss'
import { DrawerGameCard } from "./drawerGameCard/drawerGameCard"

export const SavedGamesDrawer =({open, onClose})=>{
    const {savedGames,savedGameslistIsEmpty} = useContext(savedGamesContext)

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
                    savedGames.map((game, index) => {
                        const mountingDelay = (index + 1) * 0.03
                        return  <DrawerGameCard game={game} key={game.id} mountingDelay={mountingDelay} />
                    })
                )
            }
        </Drawer>
    )
}