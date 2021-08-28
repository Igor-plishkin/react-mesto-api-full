import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <div className="popup__form-field">
        <input
          className="popup__input popup__input_name"
          id="profile-name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          onChange={handleNameChange}
          value={name || ""}
        />
        <span className="popup__error" id="profile-name-error"></span>
      </div>
      <div className="popup__form-field">
        <input
          className="popup__input popup__input_job"
          id="profile-job"
          type="text"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          onChange={handleDescriptionChange}
          value={description || ""}
        />
        <span className="popup__error" id="profile-job-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
