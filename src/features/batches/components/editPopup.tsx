// @ts-nocheck
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { editButtonColor } from "../../../styles/buttonColors";
import EditIcon from "@mui/icons-material/Edit";
import { TextField, Button } from "@mui/material";
import { getYearById } from "../services/batchServices";

export default function EditPopup({
  open,
  onClose,
  selectedId,
}: {
  open: boolean;
  onClose: () => void;
  selectedId: string;
}) {
  const textFieldStyle = {
    width: "100%",
    marginBottom: "10px",
  };
  const [year, setYear] = useState("");
  const [academicYear, setAcademicYear] = useState("");

  useEffect(() => {
    const fetchYear = async () => {
      try {
        const selectedYear = await getYearById(selectedId);
        setYear((selectedYear as any).year as string);
        setAcademicYear((selectedYear as any).academicYear as string);
      } catch (error) {
        console.error("Error fetching year", error);
      }
    };
    fetchYear();
  }, []);

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
          Edit Year Record
        </Typography>

        <TextField
          id="outlined-basic"
          label="Year"
          variant="outlined"
          sx={textFieldStyle}
          value={year}
        />
        <TextField
          id="outlined-basic"
          label="Academic Year"
          variant="outlined"
          sx={textFieldStyle}
          value={academicYear}
        />
        <Button variant="contained" sx={{ color: { editButtonColor } }}>
          <EditIcon /> Edit
        </Button>
      </Box>
    </Modal>
  );
}
