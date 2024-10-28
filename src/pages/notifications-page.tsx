import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Send } from "@mui/icons-material";

export default function NotificationsPage() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("all");

  const notifications = [
    { id: 1, message: "Notification 1", read: true },
    { id: 2, message: "Notification 2", read: false },
    { id: 3, message: "Notification 3", read: true },
    { id: 4, message: "Notification 4", read: false },
  ];

  // Handle opening and closing the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle form submission (for demo, just closing the modal)
  const handleSubmit = () => {
    console.log({
      title,
      body,
      user,
    });
    // Clear form and close modal after submission
    setTitle("");
    setBody("");
    setUser("all");
    setOpen(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Notifications
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Send />}
          onClick={handleClickOpen}
          style={{ margin: "30px 0" }}
        >
          Send Notification
        </Button>
      </div>

      <List>
        {notifications.map((notification) => (
          <ListItem
            key={notification.id}
            style={{
              backgroundColor: notification.read ? "#f0f0f0" : "#e3f2fd",
              marginBottom: "10px",
              borderRadius: "8px",
              boxShadow: notification.read
                ? "none"
                : "0px 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              transition: "background-color 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
          >
            <ListItemText
              primary={notification.message}
              primaryTypographyProps={{
                variant: notification.read ? "body1" : "h6",
                style: { fontWeight: notification.read ? "normal" : "bold" },
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Modal for sending notifications */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Send New Notification</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="dense"
          />
          <TextField
            label="Body"
            fullWidth
            multiline
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            margin="dense"
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>User</InputLabel>
            <Select value={user} onChange={(e) => setUser(e.target.value)}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="students">Students</MenuItem>
              <MenuItem value="lecturers">Lecturers</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
