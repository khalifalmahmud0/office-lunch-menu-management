// DataTable.js
import React, { useState } from "react";
import DataTable from "react-data-table-component";

const CustomDataTable = ({ fields, data, hasActions }) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const columns = fields.map((field) => ({
    name: field.label,
    selector: (row) => row[field.key],
    sortable: field.sortable || false,
  }));

  if (hasActions) {
    // Add custom column for "Actions" if hasActions is true
    columns.push({
      name: "Actions",
      cell: (row) => (
        <div>
          <a href={`edit/${row.id}`}>Edit</a>
          {" | "}
          <a href={`delete/${row.id}`}>Delete</a>
        </div>
      ),
    });
  }

  const filteredItems = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border rounded py-2 px-4"
        />
        <button
          onClick={handleClear}
          className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Clear
        </button>
      </div>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      fixedHeader={true}
      fixedHeaderScrollHeight="500px"
      highlightOnHover
      pointerOnHover
    />
  );
};

export default CustomDataTable;
