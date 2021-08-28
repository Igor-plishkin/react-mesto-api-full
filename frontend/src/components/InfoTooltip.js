import React from "react";
import succesIcon from "../images/succesIcon.svg";
import errorIcon from "../images/errorIcon.svg";
function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container popup__info-tool">
        <button
          className="popup__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
        {props.isSucces ? (
          <>
            <img
              className="popup__info-img"
              src={succesIcon}
              alt="Вы успешно зарегистрировались!"
            />
            <p className="popup__info-message">
              Вы успешно зарегистрировались!
            </p>
          </>
        ) : (
          <>
            <img
              className="popup__info-img"
              src={errorIcon}
              alt="Что-то пошло не так!
              Попробуйте ещё раз."
            />
            <p className="popup__info-message">
              Что-то пошло не так! Попробуйте ещё раз.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoTooltip;
