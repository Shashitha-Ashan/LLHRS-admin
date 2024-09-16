// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";

const ImportedModules = ({ modules }) => {
  const columns = [
    { field: "moduleName", headerName: "Module Name", width: 250 },
    { field: "moduleCode", headerName: "Module Code", width: 150 },
    { field: "NOHours", headerName: "Hours", width: 100 },
    { field: "academicYear", headerName: "Academic Year", width: 150 },
    { field: "semester", headerName: "Semester", width: 100 },
  ];

  return (
    <DataGrid
      rows={modules}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row.moduleCode}
      rowsPerPageOptions={[5, 10, 20]}
      pageSizeOptions={[5, 10]}
      initialState={{ page: 0, pageSize: 5 }}
    />
  );
};

export default ImportedModules;
