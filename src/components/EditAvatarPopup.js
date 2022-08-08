import { render } from "@testing-library/react";
import { useState,useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
    const currentUser = useContext(CurrentUserContext);
    const [avatarLink, setAvatarLink] = useState(currentUser.avatar);

    function handleChangeAvatar(e){
        setAvatarLink(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onUpdateAvatar(avatarLink);
        setAvatarLink('');
    }

    return (
        <PopupWithForm
          onClose = {onClose}
          isOpen = {isOpen}
          onSubmit = {handleSubmit}
          name="changeAvatar"  
          title="Обновить аватар">
            <div className ="popup__container">
              <input required id="URLInputAvatar" className="popup__input-text popup__input-text_field_job" name="avatar" placeholder="Ссылка на картинку" type="url" onChange={handleChangeAvatar} value={avatarLink}/>
              <span className="popup__input-error" id="URLInputAvatar-error"></span>
            </div>
        </PopupWithForm>

)


}

export default EditAvatarPopup;
