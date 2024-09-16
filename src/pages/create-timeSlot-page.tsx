// @ts-nocheck

import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { getAllHalls } from "../features/halls/services/hallServices";
import { addTimeSlot } from "../features/timeTable/services/timeTableServices";
import { getModules } from "../features/modules/services/moduleServices";
import { getLecturers } from "../features/users/services/userServices";

export default function CreateTimeSlotPage() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [hall, setHall] = useState("");
  const [halls, setHalls] = useState([]);
  const [sessionType, setSessionType] = useState("");
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState("");
  const [error, setError] = useState("");

  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const hallData = await getAllHalls();
        // @ts-ignore
        setHalls(hallData);
      } catch (error) {
        console.error("Error fetching halls", error);
      }
    };
    const fetchModules = async () => {
      try {
        const moduleData = await getModules();
        // @ts-ignore
        setModules(moduleData);
      } catch (error) {
        console.error("Error fetching modules", error);
      }
    };
    const fetchLecturers = async () => {
      try {
        const lecturerData = await getLecturers();
        setLecturers(lecturerData);
      } catch (error) {
        console.error("Error fetching lecturers", error);
      }
    };
    fetchModules();
    fetchLecturers();
    fetchHalls();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      date,
      startTime,
      endTime,
      lecturer,
      hall,
      sessionType,
      module,
    });
    if (
      date === "" ||
      startTime === "" ||
      endTime === "" ||
      lecturer === "" ||
      hall === "" ||
      sessionType === "" ||
      module === ""
    ) {
      setError("All fields are required");
    } else {
      try {
        await addTimeSlot(
          date,
          startTime,
          endTime,
          lecturer,
          hall,
          sessionType,
          module
        );
      } catch (error) {
        console.error("Error creating time slot", error);
        setError("Error creating time slot");
      }
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Time Slot</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Start Time"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="End Time"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Lecturer</InputLabel>
              <Select
                value={lecturer}
                onChange={(e) => setLecturer(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200, // Set max height for the dropdown
                    },
                  },
                }}
              >
                {lecturers.map((lecturerItem) => (
                  // @ts-ignore
                  <MenuItem key={lecturerItem._id} value={lecturerItem._id}>
                    // @ts-ignore
                    {lecturerItem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Hall</InputLabel>
              <Select
                value={hall}
                onChange={(e) => setHall(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200, // Set max height for the dropdown
                    },
                  },
                }}
              >
                {halls.map((hallItem) => (
                  <MenuItem key={hallItem._id} value={hallItem._id}>
                    {hallItem.hallName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Module</InputLabel>
              <Select
                value={module}
                onChange={(e) => setModule(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200, // Set max height for the dropdown
                    },
                  },
                }}
              >
                {modules.map((moduleItem) => (
                  // @ts-ignore
                  <MenuItem key={moduleItem._id} value={moduleItem._id}>
                    // @ts-ignore
                    {moduleItem.moduleCode}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Session Type</InputLabel>
              <Select
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
              >
                <MenuItem value="lecture">Lecture</MenuItem>
                <MenuItem value="lab">Lab</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Create Time Slot
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
