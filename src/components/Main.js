//import { queryByDisplayValue } from '@testing-library/react';
import avatar from '../images/Avatar.png';
import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props){
    const [userName, setUserName] = React.useState('Serebrennikov Kostya');
    const [userDesctiption, setUserDesctiotion] = React.useState('Developer');
    const [userAvatar, setUserAvatar] = React.useState({avatar});
    const [cards, setCards] = React.useState([]);

    React.useEffect(()=>{
        api.getUserInfo()
            .then((response)=>{
                setUserName(response.name);
                setUserDesctiotion(response.about);
                setUserAvatar(response.avatar);
            })
            .catch((error)=>{
                console.log(error);
                })   
    },[])
    React.useEffect(()=>{
        api.getInitialCards()
            .then((response)=>{
                setCards(response);
                })
            .catch((error)=>{
                console.log(error);
                })
                
            },[])  

    return (
        <main className="page__content">
            <section className="profile"> 
                <div className="profile__author">
                    <button className="profile__changeAvatar-button" onClick={props.onEditAvatar} type="button">
                        <img className="profile__avatar" src={userAvatar} alt="портрет"/>
                    </button>
                    <div className="profile__info">
                        <div className="profile__text">
                            <h1 className="profile__name block">{userName}</h1>
                            <p className="profile__job block">{userDesctiption}</p>
                        </div>
                        <button className="profile__change-button" onClick={props.onEditProfile} type="button"></button>  
                    </div>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
            </section>
            <section className="cards">
                <ul className="cards__table">
                    {
                        cards.map((card) => {
                            return < Card 
                                card = {<li key={card._id.toString()} className="card">
                                            <img className="card__image" src={card.link} alt={card.name} onClick={()=> props.onCardClick(card)}/>
                                            <button className="card__button-del card__button-del_state_disable" type="button"></button>
                                            <div className="card__description">
                                                <h2 className="card__name block">{card.name}</h2>
                                                <button className="card__button-like" type="button"></button>
                                                <p className="card__amount-like">{card.likes.length}</p>
                                            </div>  
                                        </li>}
                                />
                        })
                    }
                </ul>
            </section>
        </main>
    )

}

export default Main;
