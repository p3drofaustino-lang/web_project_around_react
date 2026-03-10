import { useState, useEffect } from "react";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch(console.error);
  }, []);

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateUser(data) {
    api
      .updateUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch(console.error);
  }

  function handleUpdateAvatar(data) {
    api
      .updateAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch(console.error);
  }

  function handleCardLike(card) {
  const isLiked = card.isLiked;

  api
    .changeLikeCardStatus(card._id, !isLiked)
    .then(() => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id
            ? { ...currentCard, isLiked: !isLiked }
            : currentCard
        )
      );
    })
    .catch(console.error);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch(console.error);
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards((state) => [newCard, ...state]);
        handleClosePopup();
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page__content">
        <Header />
        <Main
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;