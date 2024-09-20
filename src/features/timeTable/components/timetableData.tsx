// @ts-ignore
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getAllTimeSlots } from "../services/timeTableServices";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useNavigate } from "react-router-dom";
import {
  newRecordButtonColor,
  editButtonColor,
} from "../../../styles/buttonColors";
import LoadingIndicator from "../../../components/loading-indicator";

interface TimeSlot {
  _id: string;
  date: string;
  start_time: string;
  end_time: string;
  lecturer: { name: string };
  hall: { hallName: string };
  module: { moduleName: string };
  slot_type: string;
  sessionType: string;
}

const TimeTableData = () => {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimeSlots = async () => {
      const slots: TimeSlot[] = (await getAllTimeSlots()) as TimeSlot[];
      setLoading(false);
      setTimeSlots(slots);
    };
    fetchTimeSlots();
  }, []);

  // Helper function to split time from datetime
  const splitTime = (time: string) => {
    let timeString = time.split("T")[1];
    const timeStringArray = timeString.split(":");
    timeString = timeStringArray[0] + ":" + timeStringArray[1];
    return timeString;
  };

  // Group time slots by module name
  const groupedTimeSlots = timeSlots.reduce<Record<string, TimeSlot[]>>(
    (acc, slot) => {
      const moduleName = slot.module?.moduleName || "Unknown Module"; // Handle case where module might be missing
      if (!acc[moduleName]) acc[moduleName] = [];
      acc[moduleName].push(slot);
      return acc;
    },
    {}
  );

  // Columns for the DataGrid
  const columns = [
    { field: "date", headerName: "Date", width: 150 },
    {
      field: "start_time",
      headerName: "Start Time",
      width: 150,
      valueGetter: (value: any) => (value ? splitTime(value) : "N/A"),
    },
    {
      field: "end_time",
      headerName: "End Time",
      width: 150,
      valueGetter: (value: any) => (value ? splitTime(value) : "N/A"),
    },
    {
      field: "lecturer",
      headerName: "Lecturer",
      width: 150,
      valueGetter: (value: any) => (value ? value.name : "N/A"),
    },
    {
      field: "hall",
      headerName: "Hall",
      width: 150,
      valueGetter: (value: any) => (value ? value.hallName : "N/A"),
    },
    {
      field: "module",
      headerName: "Module",
      width: 250,
      valueGetter: (value: any) => (value ? value.moduleName : "N/A"),
    },
    {
      field: "slot_type",
      headerName: "Slot Type",
      width: 150,
    },
    {
      field: "sessionType",
      headerName: "Session Type",
      width: 150,
    },
  ];

  if (loading) return <LoadingIndicator />;

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <Button
        variant="contained"
        style={{ marginBottom: "20px", backgroundColor: editButtonColor }}
        onClick={() => {
          navigate("/time-table/create-slot");
        }}
      >
        <AddBoxIcon /> Add Time Slot
      </Button>
      <Button
        variant="contained"
        style={{
          marginBottom: "20px",
          marginLeft: "20px",
          backgroundColor: newRecordButtonColor,
        }}
        onClick={() => {
          navigate("/time-table/create-slot");
        }}
      >
        <PostAddIcon /> Add Time Slot CSV
      </Button>
      {Object.keys(groupedTimeSlots).map((moduleName) => (
        <Accordion key={moduleName}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{moduleName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ height: "60vh", width: "100%" }}>
              <DataGrid
                rows={groupedTimeSlots[moduleName]}
                columns={columns}
                getRowId={(row) => row._id}
                pageSizeOptions={[5, 10]}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TimeTableData;
