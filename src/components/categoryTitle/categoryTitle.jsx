import { Link } from 'react-router-dom'
import { useMountingAnimation } from '../../Hooks/useMountingAnimation'
import './categoryTitle.scss'

export const CategoryTitle =({title, search=false, style})=>{
    const visibility = useMountingAnimation()

    return (
        <>
            <div className={`category-title-container ${visibility ? '' : 'hidden'}`}>
                <div className='category-title' style={style}>
                    { title }
                    { search && 
                        <Link to='/'>
                            <span className="cancel-search"> X </span> 
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}