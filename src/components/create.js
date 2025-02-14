import React, { useState } from "react";
import { createPatient } from "../services/service";
import { useNavigate } from "react-router-dom";

function CreatePatient() {
  const [patient, setPatient] = useState({
    dni: "",
    nombre: "",
    apellidos: "",
    direccion: "",
    localidad: "",
    codigoPostal: "",
    telefono: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPatient(patient);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="dni" value={patient.dni} onChange={handleChange} placeholder="DNI" required />
      <input type="text" name="nombre" value={patient.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="apellidos" value={patient.apellidos} onChange={handleChange} placeholder="Apellidos" required />
      <input type="text" name="direccion" value={patient.direccion} onChange={handleChange} placeholder="Dirección" required />
      <input type="text" name="localidad" value={patient.localidad} onChange={handleChange} placeholder="Localidad" required />
      <input type="text" name="codigoPostal" value={patient.codigoPostal} onChange={handleChange} placeholder="Código Postal" required />
      <input type="text" name="telefono" value={patient.telefono} onChange={handleChange} placeholder="Teléfono" required />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default CreatePatient;