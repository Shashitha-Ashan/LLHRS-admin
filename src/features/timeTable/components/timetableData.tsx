// @ts-ignore

import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getAllTimeSlots } from "../services/timeTableServices";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useNavigate } from "react-router-dom";
import {
  newRecordButtonColor,
  editButtonColor,
} from "../../../styles/buttonColors";
import LoadingIndicator from "../../../components/loading-indicator";

const TimeTableData = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTimeSlots = async () => {
      const slots = await getAllTimeSlots();
      // @ts-ignore
      setLoading(false);
      setTimeSlots(slots);
    };
    fetchTimeSlots();
  }, []);
  // @ts-ignore
  const splitTime = (time) => {
    let timeString = time.split("T")[1];
    const timeStringArray = timeString.split(":");
    timeString = timeStringArray[0] + ":" + timeStringArray[1];
    return timeString;
  };
  const columns = [
    { field: "date", headerName: "Date", width: 150 },
    {
      field: "start_time",
      headerName: "Start Time",
      width: 150,
      // @ts-ignore
      valueGetter: (value) => {
        return value ? splitTime(value) : "N/A";
      },
    },
    {
      field: "end_time",
      headerName: "End Time",
      width: 150,
      // @ts-ignore
      valueGetter: (value) => {
        return value ? splitTime(value) : "N/A";
      },
    },
    {
      field: "lecturer",
      headerName: "Lecturer",
      width: 150,
      // @ts-ignore
      valueGetter: (value) => {
        return value ? value.name : "N/A";
      },
    },
    {
      field: "hall",
      headerName: "Hall",
      width: 150,
      // @ts-ignore
      valueGetter: (value) => {
        return value ? value.hallName : "N/A";
      },
    },
    {
      field: "module",
      headerName: "Module",
      width: 250,
      // @ts-ignore
      valueGetter: (value) => {
        return value != null ? value.moduleName : "N/A";
      },
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
      <DataGrid
        rows={timeSlots}
        columns={columns}
        pageSize={5}
        // @ts-ignore
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSizeOptions={[5, 10]}
        // @ts-ignore
        initialState={{ page: 0, pageSize: 5 }}
      />
    </div>
  );
};

export default TimeTableData;
