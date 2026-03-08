export default function Popup(props) {
  // Adicionamos 'isOpen' e 'name' às props
  const { onClose, title, children, isOpen, name } = props;

  return (
    /* 1. Adicionamos a classe dinâmica popup_opened e o tipo do popup */
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />

        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}
