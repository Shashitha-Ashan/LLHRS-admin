import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getYears } from "../services/batchServices";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AddIcon from "@mui/icons-material/Add";

const AcademicYears = () => {
  const [halls, setHalls] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchHalls = async () => {
      const halls = await getYears();
      setHalls(halls);
    };
    fetchHalls();
  }, []);
  const columns = [
    { field: "year", headerName: "Year", width: 90 },
    { field: "academicYear", headerName: "Name", width: 150 },
  ];
  const handleRowSelection = (newSelection) => {
    // Allow only a single selection
    if (newSelection.length > 0) {
      setSelectedRow([newSelection[0]]); // Always keep the selection to a single row
    } else {
      setSelectedRow([]);
    }
    console.log(selectedRow);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: "10px", backgroundColor: "#4CAF50" }}
      >
        <AddIcon /> Add Academic Year
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: "10px", mb: "10px", backgroundColor: "red" }}
      >
        <DangerousIcon /> Delete Academic Year
      </Button>
      <DataGrid
        rows={halls}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        pageSizeOptions={[5, 10]}
        initialState={{ page: 0, pageSize: 5 }}
        onRowClick={(row) => {
          console.log(row);
        }}
        checkboxSelection
        selectionModel={selectedRow}
        onRowSelectionModelChange={handleRowSelection}
        hideFooterSelectedRowCount={true}
        loading={halls.length === 0}
      />
    </>
  );
};

export default AcademicYears;
