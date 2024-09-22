// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { useUsers } from "../hooks/useUsers";
import LoadingIndicator from "../../../components/loading-indicator";
import { Button } from "@mui/material";
import { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { render } from "react-dom";

const UserList = () => {
  const { users, loading, error } = useUsers();
  const [selectedUsers, setSelectedUsers] = useState([]);

  if (loading) return <LoadingIndicator />;
  if (error) return <div>{error}</div>;
  const handleVerify = () => {
    console.log("Verifying");
  };
  const handleRowSelection = (newSelection) => {
    setSelectedUsers(newSelection);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "adminConfirmation",
      headerName: "Admin Confirmation",
      width: 200,
      renderCell: (params) => (params.value ? "Yes" : "No"),
    },
    { field: "uniEmail", headerName: "University Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "isVerified",
      headerName: "Email Verified",
      width: 200,
      renderCell: (params) => (params.value ? "Yes" : "No"),
    },
    { field: "academicYear", headerName: "Academic Year", width: 200 },
    { field: "department", headerName: "Department", width: 200 },
  ];

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#4CAF50", mb: 2 }}
        startIcon={<PersonAddIcon />}
      >
        New User
      </Button>
      <Button
        onClick={handleVerify}
        variant="contained"
        sx={{ backgroundColor: "#4CAF50", ml: 2, mb: 2 }}
        disabled={selectedUsers.length === 0}
      >
        Verify
      </Button>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        checkboxSelection
        rowsPerPageOptions={[5, 10, 20]}
        pageSizeOptions={[5, 10]}
        initialState={{ page: 0, pageSize: 5 }}
        onRowSelectionModelChange={handleRowSelection}
        getRowClassName={(params) => {
          if (params.row.role === "lecturer") {
            return "lecturer-row";
          }
          return "";
        }}
      />
    </div>
  );
};

export default UserList;
