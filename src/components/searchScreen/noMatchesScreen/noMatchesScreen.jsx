
import { useMountingAnimation } from '../../../Hooks/useMountingAnimation'
import { CategoryTitle } from '../../categoryTitle/categoryTitle'
import './noMatchesScreen.scss'

export const NoMatchesScreen =({searchedText})=>{
    const visibility = useMountingAnimation()


     return (
        <div className='no-matches-screen'>
            <CategoryTitle title={'Buscando: ' + searchedText} search={true} style={{ display: 'flex', justifyContent: 'center' }}  />
            <h2 className={`no-matches-text ${visibility ? '' : 'hidden'}`}>No se encontró ningún juego que coincida con la búsqueda.</h2>
        </div>
     )
}