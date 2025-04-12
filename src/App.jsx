import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import "./App.css";
import Form from "./components/Form";

export default function App() {
  const [students, setStudents] = useState([]);
  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };
  return (
    <div className="container">
      <Form onAddStudent={handleAddStudent} />
      <StudentTable data={students} />
    </div>
  );
}
