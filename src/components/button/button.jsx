import './button.scss'

export const Button =({content, onClick})=>{
    return (
        <button className="button" onClick={onClick}>
            { content }
        </button>
    )
}