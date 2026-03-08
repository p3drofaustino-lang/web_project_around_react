import { useRef, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Popup from "../Popup/Popup";

export default function EditAvatar({ isOpen, onClose }) {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  
  // 1. Criar a ref para o input (Etapa 5 do roteiro)
  const avatarInputRef = useRef(); 

  function handleSubmit(e) {
    e.preventDefault();

    // 2. Obter o valor diretamente via ref e chamar a função do App
    handleUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <Popup title="Alterar foto de perfil" name="edit-avatar" isOpen={isOpen} onClose={onClose}>
      <form className="popup__form" name="avatar-form" noValidate onSubmit={handleSubmit}>
        <label className="popup__field">
          <input
            ref={avatarInputRef} // Atribuição da ref
            className="popup__input popup__input_type_url"
            id="avatar-link"
            name="link"
            placeholder="Link da imagem"
            required
            type="url"
          />
          <span className="popup__error" id="avatar-link-error" />
        </label>
        <button className="button popup__button" type="submit">Salvar</button>
      </form>
    </Popup>
  );
}