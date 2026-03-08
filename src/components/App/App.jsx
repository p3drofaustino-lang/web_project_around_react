import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import NewCard from "../NewCard/NewCard";
import ConfirmDeletePopup from "../ConfirmDeletePopup/ConfirmDeletePopup";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  // Estados para Popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);

  // Estados para Dados e UX
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Carregamento Inicial (User e Cards)
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => console.log(`Erro ao carregar dados: ${err}`));
  }, []);

  // 2. Manipuladores de Perfil e Avatar
  function handleUpdateUser(data) {
  setIsLoading(true);
  // A API espera { name, about }
  api.updateUserInfo({ name: data.name, about: data.about })
    .then((newUser) => {
      setCurrentUser(newUser);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
    .finally(() => setIsLoading(false));
  }

  function handleUpdateAvatar(data) {
  setIsLoading(true);
  // 'data' geralmente vem como { avatar: "url" } do componente EditAvatar
  api.updateAvatar(data.avatar) 
    .then((newUser) => {
      setCurrentUser(newUser);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
    .finally(() => setIsLoading(false));
  }

  // 3. Manipuladores de Cartões (Like, Add, Delete)
  function handleCardLike(card) {
  // Verificamos se o currentUser e card.likes existem para evitar o TypeError
  if (!currentUser) return;

  const isLiked = (card.likes || []).some((i) => i._id === currentUser._id);
  
  api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
      setCards((state) => 
        state.map((c) => (c._id === card._id ? newCard : c))
      );
    })
    .catch((err) => console.log(`Erro ao processar like: ${err}`));
  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleCardDeleteConfirm() {
    setIsLoading(true);
    api.deleteCard(cardToDelete._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  // 4. Funções de Controlo de UI
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard(null);
    setCardToDelete(null);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={() => setIsEditProfilePopupOpen(true)}
          onAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
          onEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
          onCardClick={(card) => setSelectedCard(card)}
          onCardLike={handleCardLike}
          onCardDelete={(card) => {
            setIsConfirmDeletePopupOpen(true);
            setCardToDelete(card);
          }}
          cards={cards}
        />
        <Footer />

        {/* Popups com Indicador de Carregamento */}
        <EditProfile 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          isLoading={isLoading} 
        />

        <NewCard 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onAddPlaceSubmit={handleAddPlaceSubmit}
          isLoading={isLoading}
        />

        <EditAvatar 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          isLoading={isLoading}
        />

        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onConfirm={handleCardDeleteConfirm}
          isLoading={isLoading}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;