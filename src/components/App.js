//import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Main from './Main';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setStateOpenEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setStateOpenAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setStateOpenAvatar] = React.useState(false);
  const [isImagePopupOpen, setStateOpenImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  
  function handleEditAvatarClick(){
    setStateOpenAvatar(true);
}

function handleEditProfileClick(){
    setStateOpenEditProfile(true);
}
function handleAddPlaceClick(){
    setStateOpenAddPlace(true);
}
function handleCardClick(card){
  setSelectedCard(card);
  setStateOpenImagePopup(true);
}
function closeAllPopups(namePopup){
  switch(namePopup){
    case 'addCard':
      setStateOpenAddPlace(false);
      break;
    case 'editPtofile':
      setStateOpenEditProfile(false);
      break;
    case 'changeAvatar':
      setStateOpenAvatar(false);
      break;
    default:
      setStateOpenImagePopup(false);
      break;
  }
}

  return (
    <body className="page">
        <Header/>
        <Main
        onCardClick = {handleCardClick}
        onEditProfile ={handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}/>
        <PopupWithForm
          onClose = {closeAllPopups}
          isOpen = {isEditProfilePopupOpen}
          name="editPtofile"
          title="Редактировать профиль">{
            <>
            <div className="popup__container">
            <input required id="nameInput" className="popup__input-text popup__input-text_field_name" name="name" placeholder="Жак-Ив Кусто" type="text" minLength="2" maxLength="40" />
            <span className="popup__input-error" id="nameInput-error"></span>
        </div>
        <div className="popup__container">
            <input required id="jobInput" className="popup__input-text popup__input-text_field_job" name="about" placeholder="Исследователь океана" type="text" minLength="2" maxLength="200" />
            <span className="popup__input-error" id="jobInput-error"></span>
        </div>
        </>
          }
        </PopupWithForm>
        <PopupWithForm
          onClose = {closeAllPopups}
          isOpen = {isAddPlacePopupOpen}
          name="addCard"
          title="Добавить место">{
          <>
            <div className = "popup__container">
                <input required id="nameCardInput" className="popup__input-text popup__input-text_field_name" name="name" placeholder="Название" type="text" minLength="2" maxLength="30"/> 
                <span className="popup__input-error" id="nameCardInput-error"></span>
            </div>
            <div className ="popup__container">
                <input required id="URLInput" className="popup__input-text popup__input-text_field_job" name='link' placeholder="Ссылка на картинку" type="url"/>
                <span className="popup__input-error" id="URLInput-error"></span>
            </div>
        </>
          }
        </PopupWithForm>
        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"/>
        <PopupWithForm
          onClose = {closeAllPopups}
          isOpen = {isEditAvatarPopupOpen}
          name="changeAvatar"
          title="Обновить аватар">{
            <div className ="popup__container">
              <input required id="URLInputAvatar" className="popup__input-text popup__input-text_field_job" name="avatar" placeholder="Ссылка на картинку" type="url"/>
              <span className="popup__input-error" id="URLInputAvatar-error"></span>
            </div>}
        </PopupWithForm>
        <ImagePopup
          card = {selectedCard}
          isOpen = {isImagePopupOpen}
          onClose = {closeAllPopups}
        />
        <Footer/>
    </body>
  );
}

export default App;
