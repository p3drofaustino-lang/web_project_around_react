export default function EditProfile() {
  return (
    <form className="popup__form" name="profile-form" id="edit-profile-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="profile-name"
          name="name"
          placeholder="Nome"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error" id="profile-name-error" />
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="profile-about"
          name="description"
          placeholder="Sobre mim"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error" id="profile-about-error" />
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}