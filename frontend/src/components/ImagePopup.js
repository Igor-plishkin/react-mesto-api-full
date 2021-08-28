function ImagePopup(props) {
  return (
    // Условие что объект не пустой
    <div
      className={`popup popup_zoom-place ${
        Object.keys(props.card).length && "popup_opened"
      }`}
    >
      <div className="popup__container-place">
        <button
          className="popup__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__place-image"
          src={props.card.link}
          alt={props.card.name}
        />
        <h2 className="popup__place-title">{props.card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
