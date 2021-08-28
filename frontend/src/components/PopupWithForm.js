function PopupWithForm(props) {
  return (
      <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <button className="popup__close-btn" type="reset" onClick={props.onClose}></button>
          <form
            className="popup__form"
            name={props.name}
            onSubmit={props.onSubmit}
          >
          {props.children}
            <button className="popup__submit-btn" type="submit">
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;
