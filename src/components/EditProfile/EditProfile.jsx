import { useState, useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Popup from '../Popup/Popup';

export default function EditProfile({ isOpen, onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentUser && isOpen) {
      setName(currentUser.name || '');
      setDescription(currentUser.about || '');
    }
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    // Envia os dados para o App.jsx processar a API
    handleUpdateUser({ 
      name, 
      about: description 
    });
  }

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  return (
    <Popup 
      title="Editar Perfil" 
      name="edit-profile" 
      isOpen={isOpen} 
      onClose={onClose}
    >
      <form
        className="popup__form"
        name="profile-form"
        id="edit-profile-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="popup__label">
          <input
            className="popup__input"
            id="owner-name"
            maxLength="40"
            minLength="2"
            name="userName"
            placeholder="Nome"
            required
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <span className="popup__error" id="owner-name-error"></span>
        </label>
        <label className="popup__label">
          <input
            className="popup__input"
            id="owner-description"
            maxLength="200"
            minLength="2"
            name="userDescription"
            placeholder="Sobre mim"
            required
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
          <span className="popup__error" id="owner-description-error"></span>
        </label>
        <button className="button popup__button" type="submit">
          Salvar
        </button>
      </form>
    </Popup>
  );
}