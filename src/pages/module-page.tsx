import { Paper, Typography, Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ModuleList from "../features/modules/components/moduleList";
import { useNavigate } from "react-router-dom";

const ModulesPage = () => {
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
        Modules
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
      </div>
      <Paper sx={{ height: "70vh", width: "100%" }}>
        <ModuleList />
      </Paper>
    </div>
  );
};
export default ModulesPage;
