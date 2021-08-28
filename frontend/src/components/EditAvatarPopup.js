import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <div className="popup__form-field">
        <input
          className="popup__input popup__input_url"
          id="avatar-url"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          ref={avatarRef}
        />
        <span className="popup__error" id="avatar-url-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
