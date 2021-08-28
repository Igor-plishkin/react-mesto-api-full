import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardDelete, onCardLike}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `place__delete-btn ${
    isOwn && 'place__delete-btn_active'
  }`;
  const cardLikeButtonClassName = `place__like ${
    isLiked && 'place__like_active'
  }`;
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="place">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <div
        className="place__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="place__footer">
        <h2 className="place__name">{card.name}</h2>
        <div className="place__like-wrapper">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="place__counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
