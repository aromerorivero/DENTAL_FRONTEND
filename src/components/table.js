import React, { useEffect, useState } from "react";
import { deletePatient, getPatients } from "../services/service";
import { Link } from "react-router-dom";
import DeleteButton from "./deletebutton";

function PatientTable() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const loadPatient = async () => {
      const data = await getPatients();
      setPatients(data);
    };
    loadPatient();
  }, []);

  const handleDelete = async (dni) => {
    await deletePatient(dni);
    setPatients(patients.filter(p => p.dni !== dni));
  };

  return (
    <div>
      <h2>Pacientes</h2>
      <table>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.dni}>
              <td>{p.dni}</td>
              <td>{p.nombre} {p.apellidos}</td>
              <td>
                <Link to={`/modify/${p.dni}`}>Modificar</Link>
                <DeleteButton onDelete={() => handleDelete(p.dni)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create">Agregar Paciente</Link>
    </div>
  );
}

export default PatientTable;