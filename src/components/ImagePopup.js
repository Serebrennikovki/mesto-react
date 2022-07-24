function ImagePopup(props){
    return(
        <div className={`popup popup_function_bigImage ${props.isOpen ? 'popup_opened': ''}`}>
            <div className="popup__overlay" onClick={props.onClose}></div>
            <div className="bigImage">
                <button className="popup__close-button bigImage__button-close" type="button" onClick={props.onClose}></button>
                <img className="bigImage__img" src={props.card.link} alt={props.card.name}/>
                <h2 className="bigImage__name">{props.card.name}</h2>
            </div>
        </div>
    )
}
export default ImagePopup;