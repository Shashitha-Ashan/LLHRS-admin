import { Typography, Paper, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UserList from "../features/users/components/usersList";
const UsersPage = () => {
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
        Users
      </Typography>
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
          startIcon={<PersonAddIcon />}
        >
          New User
        </Button>
      </div>
      <Paper sx={{ height: "70vh", width: "100%" }}>
        <UserList />
      </Paper>
    </div>
  );
};

export default UsersPage;
