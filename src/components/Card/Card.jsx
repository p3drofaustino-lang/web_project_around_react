import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  // 1. Aceder ao contexto para obter o usuário atual [cite: 77, 79]
  const { currentUser } = useContext(CurrentUserContext);

  // 2. Verificar se o usuário atual é o dono do cartão para mostrar/esconder o botão de lixo
  const isOwn = card.owner._id === currentUser?._id;

  // Criar uma variável que você depois define na className do botão de excluir
  const cardDeleteButtonClassName = (
    `button card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  // 3. Verificar se o usuário atual "curtiu" o cartão (Roteiro Etapa 2)
  const isLiked = (card.likes || []).some(user => user._id === currentUser?._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_is-active' : ''
  }`;

  // Funções de manipulação de cliques
  function handleImageClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link || null}
        alt={card.name}
        onClick={handleImageClick}
      />

      {/* Botão de excluir com classe dinâmica baseada na posse do cartão */}
      <button
        aria-label="Delete card"
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      />

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            aria-label="Like card"
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <span className="card__like-count">{card.likes?.length || 0}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
