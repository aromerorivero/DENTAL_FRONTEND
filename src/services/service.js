
import axios from "axios";

const API_URL = "http://localhost:3001/patients";

const getPatients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los pacientes:", error);
    throw error;
  }
};

const getPatientByDni = async (dni) => {
  try { 
    const response = await axios.get(`${API_URL}/${dni}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el paciente:", error);
    throw error;
  }
};

const createPatient = async (patient) => {
  try {
    const response = await axios.post(API_URL, patient);
    return response.data;
  } catch (error) {
    console.error("Error al crear el paciente:", error);
    throw error;
  }
};

const modifyPatient = async (dni, patient) => {
  try {
    console.log(patient)
    const response = await axios.put(`${API_URL}/${dni}`, patient);
    return response.data;
  } catch (error) {
    console.error("Error al modificar el paciente:", error);
    throw error;
  }
};

const deletePatient = async (dni) => {
  try {
    const response = await axios.delete(`${API_URL}/${dni}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el paciente:", error);
    throw error;
  }
};

export { getPatients, getPatientByDni, createPatient, modifyPatient, deletePatient };
