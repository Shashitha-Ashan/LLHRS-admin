// components/ModuleList.ts
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useModules } from "../hooks/useModules";
import LoadingIndicator from "../../../components/loading-indicator";

const ModuleList = () => {
  const { modules, loading, error } = useModules();

  if (loading) return <LoadingIndicator />;
  if (error) return <div>{error}</div>;

  // Define columns for the DataGrid
  const columns = [
    { field: "moduleCode", headerName: "Module Code", width: 150 },
    { field: "moduleName", headerName: "Module Name", width: 250 },
    { field: "semester", headerName: "Semester", width: 100 },
    { field: "academicYear", headerName: "Academic Year", width: 150 },
    { field: "NOHours", headerName: "Hours", width: 100 },
  ];

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={modules}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        pageSizeOptions={[5, 10]}
        initialState={{ page: 0, pageSize: 5 }}
      />
    </div>
  );
};

export default ModuleList;
