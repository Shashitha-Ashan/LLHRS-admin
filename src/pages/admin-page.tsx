import { Paper, Typography } from "@mui/material";
import AdminUserList from "../features/admin/components/adminUserList";

export default function AddAdminPage() {
  return (
    <div>
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Add Admin
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      ></div>
      <Paper sx={{ height: "70vh", width: "100%" }}>
        <AdminUserList />
      </Paper>
    </div>
  );
}
