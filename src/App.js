import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientTable from "./components/table";
import CreatePatient from "./components/create";
import ModifyPatient from "./components/modify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientTable />} />
        <Route path="/create" element={<CreatePatient />} />
        <Route path="/modify/:dni" element={<ModifyPatient />} />
      </Routes>
    </Router>
  );
}

export default App;