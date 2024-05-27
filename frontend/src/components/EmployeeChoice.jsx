// UsersTable.js
import React from "react";
import CustomDataTable from "./DataTable";

const UsersTable = () => {
  const fields = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 1, name: "John Doe", email: "john@example.com" },
  ];

  return (
    <div>
      <h2>Users Table with Actions</h2>
      <CustomDataTable fields={fields} data={data} hasActions={true} />
    </div>
  );
};

export default UsersTable;
