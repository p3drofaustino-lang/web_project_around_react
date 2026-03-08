import { useState, useEffect } from "react";
import Popup from "../Popup/Popup";

export default function NewCard({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  // Limpa os campos sempre que o estado de abertura mudar para 'true'
  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <Popup title="Novo Local" name="add-card" isOpen={isOpen} onClose={onClose}>
      <form className="popup__form" name="card-form" noValidate onSubmit={handleSubmit}>
        <input 
          className="popup__input" 
          placeholder="Título" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          className="popup__input" 
          placeholder="Link da imagem" 
          value={link} 
          onChange={(e) => setLink(e.target.value)} 
          required 
        />
        <button className="button popup__button" type="submit">Salvar</button>
      </form>
    </Popup>
  );
}