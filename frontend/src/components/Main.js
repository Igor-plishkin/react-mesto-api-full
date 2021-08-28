import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrapper">
          <button
            className="profile__avatar-btn"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            <div className="profile__avatar"></div>
          </button>
          <div className="profile__info">
            <div className="profile__title-inner">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places">
        {props.cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
