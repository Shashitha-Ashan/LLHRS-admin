import {
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { createHall } from "../features/halls/services/hallServices";
import SimpleSnackbar from "../components/snackBar";

export default function CreateHallPage() {
  const textFieldStyle = {
    margin: "10px",
    width: "50vw",
  };
  const [hallName, setHallName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleHallNameChange = (event) => {
    setHallName(event.target.value);
  };
  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const clearFields = () => {
    setHallName("");
    setCapacity("");
    setType("");
  };
  const createNewHall = async () => {
    if (hallName === "" || capacity === "" || type === "") {
      alert("Please fill all the fields");
      return;
    }

    try {
      const hall = {
        name: hallName,
        capacity: capacity,
        type: type.toLowerCase(),
      };
      await createHall(hall);
      setOpen(true);
      clearFields();
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div>
      {open &&
        SimpleSnackbar({
          open: true,
          onClose: () => setOpen(false),
          note: "Hall created successfully",
          bkgColor: "#4FADFA",
        })}
      {error &&
        SimpleSnackbar({
          open: true,
          onClose: () => setError(false),
          note: `Error creating hall `,
          bkgColor: "red",
        })}
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
        Create New Hall
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Hall Name"
          variant="outlined"
          sx={textFieldStyle}
          value={hallName}
          onChange={handleHallNameChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Capacity"
          variant="outlined"
          sx={textFieldStyle}
          onChange={handleCapacityChange}
          type="number"
          value={capacity}
          required
        />
        <FormControl>
          <InputLabel id="hall-type-label">Hall Type</InputLabel>
          <Select
            value={type}
            onChange={handleTypeChange}
            sx={{
              marginTop: "10px",
              width: "50vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            labelId="hall-type-label"
            label="Hall Type"
          >
            <MenuItem value={"LAB"}>Lab</MenuItem>
            <MenuItem value={"LECTURE"}>Lecture hall</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4CAF50", width: "50vw", margin: "10px" }}
          onClick={() => {
            createNewHall();
          }}
        >
          Create Hall
        </Button>
      </div>
    </div>
  );
}
