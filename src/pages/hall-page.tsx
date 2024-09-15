import { Typography, Paper, Button } from "@mui/material";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import HallData from "../features/halls/components/HallData";
import { useNavigate } from "react-router-dom";

export default function HallPage() {
  const navigate = useNavigate();
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
        Lab and Lecture Halls
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
          startIcon={<DomainAddIcon />}
          onClick={() => navigate("/halls/create-hall")}
        >
          New Hall
        </Button>
      </div>
      <Paper sx={{ height: "70vh", width: "100%" }}>
        <HallData />
      </Paper>
    </div>
  );
}
