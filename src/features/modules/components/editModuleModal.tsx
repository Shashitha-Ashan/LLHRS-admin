// @ts-nocheck
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { editButtonColor } from "../../../styles/buttonColors";
import EditIcon from "@mui/icons-material/Edit";
import { TextField, Button } from "@mui/material";
import { ModuleDTO } from "../models/ModuleDTO";
import { updateModule } from "../services/moduleServices";

export default function EditModuleModal({
  open,
  onClose,
  selectedModule,
}: {
  open: boolean;
  onClose: () => void;
  selectedModule: ModuleDTO;
}) {
  const textFieldStyle = {
    width: "100%",
    marginBottom: "10px",
  };
  const handleSubmit = async () => {
    try {
      const updatedModule = await updateModule({
        _id: selectedModule._id,
        moduleCode,
        moduleName,
        semester,
        year: academicYear,
        NOHours: Number(NOHours),
      });
      console.log("Updated module:", updatedModule);
      onClose();
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  const [module, setModule] = useState<ModuleDTO>();
  const [academicYear, setAcademicYear] = useState("");
  const [moduleCode, setModuleCode] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [semester, setSemester] = useState("");
  const [NOHours, setNOHours] = useState("");
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setModule(selectedModule);
    setAcademicYear(selectedModule.year);
    setModuleCode(selectedModule.moduleCode);
    setModuleName(selectedModule.moduleName);
    setSemester(selectedModule.semester);
    setNOHours(selectedModule.NOHours);
    setIsModified(false); // Reset when a new module is selected
  }, [selectedModule]);

  const handleFieldChange = (
    setter: (value: string) => void,
    originalValue: string,
    newValue: string
  ) => {
    setter(newValue);
    setIsModified(
      newValue !== originalValue ||
        academicYear !== selectedModule.year ||
        moduleCode !== selectedModule.moduleCode ||
        moduleName !== selectedModule.moduleName ||
        semester !== selectedModule.semester ||
        NOHours !== selectedModule.NOHours
    );
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: "10px" }}
        >
          Edit Module
        </Typography>

        <TextField
          label="Module Code"
          variant="outlined"
          sx={textFieldStyle}
          value={moduleCode}
          onChange={(e) =>
            handleFieldChange(
              setModuleCode,
              selectedModule.moduleCode,
              e.target.value
            )
          }
        />
        <TextField
          label="Module Name"
          variant="outlined"
          sx={textFieldStyle}
          value={moduleName}
          onChange={(e) =>
            handleFieldChange(
              setModuleName,
              selectedModule.moduleName,
              e.target.value
            )
          }
        />
        <TextField
          label="Semester"
          variant="outlined"
          sx={textFieldStyle}
          value={semester}
          onChange={(e) =>
            handleFieldChange(
              setSemester,
              selectedModule.semester,
              e.target.value
            )
          }
        />
        <TextField
          label="Number of Hours"
          variant="outlined"
          sx={textFieldStyle}
          value={NOHours}
          onChange={(e) =>
            handleFieldChange(
              setNOHours,
              selectedModule.NOHours,
              e.target.value
            )
          }
        />
        <TextField
          label="Academic Year"
          variant="outlined"
          sx={textFieldStyle}
          value={academicYear}
          onChange={(e) =>
            handleFieldChange(
              setAcademicYear,
              selectedModule.year,
              e.target.value
            )
          }
        />

        <Button
          variant="contained"
          color="primary"
          disabled={!isModified}
          onClick={() => {
            if (
              academicYear &&
              moduleCode &&
              moduleName &&
              semester &&
              NOHours
            ) {
              handleSubmit();
            }
          }}
        >
          <EditIcon /> Edit
        </Button>
      </Box>
    </Modal>
  );
}
