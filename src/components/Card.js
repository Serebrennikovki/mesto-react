function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
      } 
    return (
    <li key={props.card._id.toString()} className="card">
        <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
        <button className="card__button-del card__button-del_state_disable" type="button"></button>
        <div className="card__description">
            <h2 className="card__name block">{props.card.name}</h2>
            <button className="card__button-like" type="button"></button>
            <p className="card__amount-like">{props.card.likes.length}</p>
        </div>  
    </li>)
}
export default Card;