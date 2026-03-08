import Popup from "../Popup/Popup";

export default function ImagePopup({ card, onClose }) {
  return (
    <Popup 
      name="image" 
      isOpen={card !== null} 
      onClose={onClose}
    >
      <img 
        className="popup__image" 
        src={card ? card.link : null} // Evita o erro de string vazia no console
        alt={card ? card.name : ""} 
      />
      <p className="popup__caption">{card ? card.name : ""}</p>
    </Popup>
  );
}