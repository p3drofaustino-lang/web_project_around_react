import React from "react";
import Popup from "../Popup/Popup";

function ConfirmDeletePopup({ isOpen, onClose, onConfirm, isLoading }) {
  
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm(); 
  }

  return (
    <Popup
      title="Tem certeza?"
      name="confirm"
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* A classe popup__content_type_confirm garante a margem de 38px no título */}
      <form 
        className="popup__form" 
        name="confirm-delete" 
        onSubmit={handleSubmit}
      >
        <button 
          type="submit" 
          className="popup__button"
        >
          {isLoading ? "A eliminar..." : "Sim"}
        </button>
      </form>
    </Popup>
  );
}

export default ConfirmDeletePopup;