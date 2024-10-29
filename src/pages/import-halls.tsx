import { Paper, Typography, Button, CircularProgress } from "@mui/material";
import ImportedModules from "../features/importModules/components/importedModules";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useImportedModules } from "../features/importModules/hooks/useImportedModules";
import InfoIcon from "@mui/icons-material/Info";
import ImportModulesIntructions from "../features/importModules/components/importModulePopup";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ImportHalls() {
  const { modules, loading, error, loadCSV, createModules } =
    useImportedModules(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

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
        Create Halls from CSV file
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "20px", marginRight: "20px", backgroundColor: "red" }}
        startIcon={<InfoIcon />}
        onClick={() => {
          handleOpen();
        }}
      >
        file instructions
      </Button>

      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ marginTop: "20px" }}
      >
        Upload CSV file
        <VisuallyHiddenInput
          type="file"
          accept=".csv"
          onChange={(event) => {
            if (event.target.files && event.target.files[0]) {
              loadCSV(event.target.files[0]);
            }
          }}
          multiple={false}
        />
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        {loading && <CircularProgress />}

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
      </div>
      <Paper sx={{ height: "60vh", width: "100%" }}>
        <ImportedModules modules={modules} />
      </Paper>
      <Button
        variant="contained"
        sx={{ marginTop: "12px", marginLeft: "85vw" }}
        disabled={modules.length === 0}
        onClick={() => {
          createModules(modules);
        }}
      >
        <Typography variant="body2">Add Halls</Typography>
      </Button>
      <ImportModulesIntructions handleClose={handleClose} open={open} />
    </div>
  );
}
