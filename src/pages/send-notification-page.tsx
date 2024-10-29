// @ts-nocheck

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import sendNotification from "../features/sendNotification/services/sendNotification";
import {
  NotificationModel,
  NotificationType,
} from "../features/sendNotification/models/notificationModel";

export default function SendNotificationPage() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationModel>(
    {} as NotificationModel
  );

  const handleSendNotification = async () => {
    setLoading(true);
    await sendNotification(notification);
    setLoading(false);
  };

  const textFieldStyle = {
    width: "100%",
    marginBottom: "1rem",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    maxWidth: 500,
    margin: "0 auto",
    padding: "2rem",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h4" gutterBottom>
        Send Notification
      </Typography>
      <FormControl variant="outlined" fullWidth sx={{ marginBottom: "1rem" }}>
        <InputLabel>Notification Type</InputLabel>
        <Select
          label="Notification Type"
          value={notification.type || ""}
          onChange={(e) =>
            setNotification({
              ...notification,
              type: e.target.value as NotificationType,
            })
          }
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="students">Students</MenuItem>
          <MenuItem value="lecturers">Lecturers</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={textFieldStyle}
        label="Title"
        variant="outlined"
        value={notification.title || ""}
        onChange={(e) =>
          setNotification({ ...notification, title: e.target.value })
        }
      />
      <TextField
        sx={textFieldStyle}
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        value={notification.message || ""}
        onChange={(e) =>
          setNotification({ ...notification, message: e.target.value })
        }
      />
      <Button
        onClick={handleSendNotification}
        disabled={loading}
        variant="contained"
        color="primary"
        sx={{ width: "100%", padding: "0.75rem", fontSize: "1rem" }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Send"}
      </Button>
    </div>
  );
}
