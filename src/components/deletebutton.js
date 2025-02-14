import React from "react";

function DeleteButton({ onDelete }) {
  return <button onClick={onDelete}>Eliminar</button>;
}

export default DeleteButton;