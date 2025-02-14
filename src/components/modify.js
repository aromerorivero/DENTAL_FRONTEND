import React, { useState, useEffect } from "react";
import { getPatientByDni, modifyPatient } from "../services/service";
import { useNavigate, useParams } from "react-router-dom";

function ModifyPatient() {
  const { dni } = useParams();
  const [patient, setPatient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPatient = async () => {
      const data = await getPatientByDni(dni);
      setPatient(data);
    };
    loadPatient();
  }, [dni]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await modifyPatient(dni, patient);
    navigate("/");
  };

  if (!patient) return <p>Cargando...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="dni" value={patient.dni} onChange={handleChange} disabled />
      <input type="text" name="nombre" value={patient.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="apellidos" value={patient.apellidos} onChange={handleChange} placeholder="Apellidos" required />
      <input type="text" name="direccion" value={patient.direccion} onChange={handleChange} placeholder="Dirección" required />
      <input type="text" name="localidad" value={patient.localidad} onChange={handleChange} placeholder="Localidad" required />
      <input type="text" name="codigoPostal" value={patient.codigoPostal} onChange={handleChange} placeholder="Codigo Postal" required />
      <input type="text" name="telefono" value={patient.telefono} onChange={handleChange} placeholder=" Telefono" required />
      <button type="submit">Modificar</button>
    </form>
  );
}

export default ModifyPatient;