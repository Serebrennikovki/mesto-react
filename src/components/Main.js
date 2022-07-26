//import { queryByDisplayValue } from '@testing-library/react';
import avatar from '../images/Avatar.png';
import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card';
//import React, {useState, useEffect} from 'react';

function Main(props){
    const [userName, setUserName] = useState('Serebrennikov Kostya');
    const [userDesctiption, setUserDesctiotion] = useState('Developer');
    const [userAvatar, setUserAvatar] = useState({avatar});
    const [cards, setCards] = useState([]);

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
                                card = {card}
                                onCardClick = {props.onCardClick}
                                />
                        })
                    }
                </ul>
            </section>
        </main>
    )

}

export default Main;
