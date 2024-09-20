// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { useUsers } from "../hooks/useUsers";
import LoadingIndicator from "../../../components/loading-indicator";

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <LoadingIndicator />;
  if (error) return <div>{error}</div>;

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "adminConfirmation",
      headerName: "Admin Confirmation",
      width: 200,
    },
    { field: "focusArea", headerName: "Focus Area", width: 200 },
    { field: "uniEmail", headerName: "University Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    { field: "isVerified", headerName: "Email Verified", width: 200 },
    { field: "academicYear", headerName: "Academic Year", width: 200 },
    { field: "department", headerName: "Department", width: 200 },
  ];

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSizeOptions={[5, 10]}
        initialState={{ page: 0, pageSize: 5 }}
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
