import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Card from "../Card/Card"; 

function Main(props) {
  // 1. Inscrição no contexto (Requisito Checklist 4)
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) {
    return <div className="content">Carregando...</div>;
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          {/* Adicionamos uma verificação simples ou fallback para evitar src vazio */}
          <img 
            className="profile__image" 
            src={currentUser.avatar || null} 
            alt={`Avatar de ${currentUser.name || "Avatar"}`} 
          />
          <button 
            className="profile__avatar-edit" 
            type="button" 
            aria-label="Editar avatar"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
             <h1 className="profile__name">{currentUser?.name || "Carregando..."}</h1>
             <button 
                className="profile__edit-button" 
                type="button" 
                aria-label="Editar perfil"
                onClick={props.onEditProfileClick}
             ></button>
          </div>
          <p className="profile__description">{currentUser?.about || ""}</p>
        </div>
        <button 
          className="profile__add-button" 
          type="button" 
          aria-label="Adicionar lugar"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {/* Renderização dinâmica (Requisito Checklist 3) */}
          {props.cards.map((card) => (
            <Card
              key={card._id} // Uso obrigatório de chaves únicas
              card={card}
              onCardClick={props.onCardClick} 
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;