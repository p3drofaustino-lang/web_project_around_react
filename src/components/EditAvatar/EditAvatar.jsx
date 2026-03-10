import { useRef, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={avatarRef}
          className="popup__input popup__input_type_url"
          id="owner-avatar"
          name="avatar"
          placeholder="Avatar link"
          required
          type="url"
        />
        <span className="popup__error" id="owner-avatar-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}