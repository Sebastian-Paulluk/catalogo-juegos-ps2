import './button.scss'

export const PersonalizedButton =({content, onClick})=>{
    return (
        <button className="button" onClick={onClick}>
            { content }
        </button>
    )
}