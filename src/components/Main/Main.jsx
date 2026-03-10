import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";

function Main(props) {
  const { popup, onOpenPopup, onClosePopup, cards, onCardLike, onCardDelete } =
    props;

  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Change avatar", children: <EditAvatar /> };

  console.log("currentUser:", currentUser);

  return (
    <main className="content">
      <section className="profile page__section">
        <button
          className="profile__avatar-button"
          type="button"
          aria-label="Alterar foto do perfil"
          onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img
            className="profile__image"
            src={currentUser?.avatar}
            alt={currentUser?.name}
          />
        </button>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => onOpenPopup(editProfilePopup)}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>

        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => {
  const isLiked = (card.likes || []).some(
    (i) => i._id === currentUser?._id
  );

  return (
    <Card
      key={card._id}
      card={{
      ...card,
      isLiked:
      card.isLiked ??
      (card.likes || []).some((i) => i._id === currentUser?._id),
      }}
      handleOpenPopup={onOpenPopup}
      onCardLike={onCardLike}
      onCardDelete={onCardDelete}
    />


    );
  })}
        </ul>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;