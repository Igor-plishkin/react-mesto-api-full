import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: link,
    });

    setLink("");
    setName("");
  }

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <div className="popup__form-field">
        <input
          className="popup__input popup__input_name"
          id="place-name"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
        <span className="popup__error" id="place-name-error">
          Ошибка
        </span>
      </div>
      <div className="popup__form-field">
        <input
          className="popup__input popup__input_url"
          id="place-url"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          onChange={handleLinkChange}
          value={link}
        />
        <span className="popup__error" id="place-url-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
