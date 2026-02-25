export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" id="edit-avatar-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="link"
          placeholder="Avatar link"
          required
          type="url"
        />
        <span className="popup__error" id="avatar-link-error" />
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}