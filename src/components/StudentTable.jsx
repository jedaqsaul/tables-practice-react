import React from "react";

export default function StudentTable({ data }) {
  return (
    <div>
      <h2>Student List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
