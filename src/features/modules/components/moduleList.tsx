// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { useModules } from "../hooks/useModules";
import LoadingIndicator from "../../../components/loading-indicator";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Edit from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditModuleModal from "./editModuleModal";
import { ModuleDTO } from "../models/ModuleDTO";

const ModuleList = () => {
  const { modules, loading, error } = useModules();
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState<ModuleDTO[]>([]);
  const [open, setOpen] = useState(false);

  if (loading) return <LoadingIndicator />;
  if (error) return <div>{error}</div>;

  const columns = [
    { field: "moduleCode", headerName: "Module Code", width: 150 },
    { field: "moduleName", headerName: "Module Name", width: 250 },
    { field: "semester", headerName: "Semester", width: 100 },
    { field: "year", headerName: "Academic Year", width: 150 },
    { field: "NOHours", headerName: "Hours", width: 100 },
  ];
  const handleRowSelection = (newSelection) => {
    const selectedModules = newSelection.map((id) =>
      modules.find((m) => m._id === id)
    );
    setSelectedRows(selectedModules);
    console.log(selectedModules);
  };
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      {open && (
        <EditModuleModal
          open={true}
          onClose={() => {
            setOpen(false);
          }}
          selectedModule={selectedRows[0]}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4CAF50" }}
          startIcon={<NoteAddIcon />}
          onClick={() => navigate("/modules/create-module")}
        >
          New Module
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4FADFA", marginLeft: "10px" }}
          startIcon={<UploadFileIcon />}
          onClick={() => navigate("/modules/import-modules")}
        >
          Import Modules
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4FADFA", marginLeft: "10px" }}
          startIcon={<Edit />}
          disabled={selectedRows.length < 1 || selectedRows.length > 1}
          onClick={() => setOpen(true)}
        >
          Edit
        </Button>
      </div>
      <DataGrid
        rows={modules}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        pageSizeOptions={[5, 10]}
        initialState={{ page: 0, pageSize: 5 }}
        getRowClassName={(params) => {
          if (params.row.semester !== null) {
            return `sem-${params.row.semester}-row`;
          }
          return "";
        }}
        onRowSelectionModelChange={handleRowSelection}
      />
    </div>
  );
};

export default ModuleList;
