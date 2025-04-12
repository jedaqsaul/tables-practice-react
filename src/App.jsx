import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import "./App.css";
import Form from "./components/Form";

export default function App() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = (emailToDelete) => {
    const updatedList = students.filter(
      (student) => student.email !== emailToDelete
    );
    setStudents(updatedList);
  };
  //filter based on search

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container">
      <Form onAddStudent={handleAddStudent} />
      <div style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
        />
      </div>
      <StudentTable data={filteredStudents} onDelete={handleDelete} />
    </div>
  );
}
