import { Link, useNavigate } from "react-router-dom";
import AccountMenu from "../components/profile-options";
import {
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Badge,
} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BadgeIcon from "@mui/icons-material/Badge";
// import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Home from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationMenu from "../features/notifications/components/notificationMenu";

function NavBar() {
  const navigate = useNavigate();
  const btnStyle = { mr: "20px" };

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key="Home" disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <Home sx={btnStyle} />
              <ListItemText primary="Home" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="TimeTable" disablePadding>
          <ListItemButton onClick={() => navigate("/time-table")}>
            <ListItemIcon>
              <CalendarMonthIcon sx={btnStyle} />
              <ListItemText primary="TimeTable" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="Users" disablePadding>
          <ListItemButton onClick={() => navigate("/users")}>
            <ListItemIcon>
              <GroupIcon sx={btnStyle} />
              <ListItemText primary="Users" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="Modules" disablePadding>
          <ListItemButton onClick={() => navigate("/modules")}>
            <ListItemIcon>
              <ViewModuleIcon sx={btnStyle} />
              <ListItemText primary="Modules" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="Batches" disablePadding>
          <ListItemButton onClick={() => navigate("/batches")}>
            <ListItemIcon>
              <BadgeIcon sx={btnStyle} />
              <ListItemText primary="Batch Management Dashboard" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="Halls" disablePadding>
          <ListItemButton onClick={() => navigate("/halls")}>
            <ListItemIcon>
              <ApartmentIcon sx={btnStyle} />
              <ListItemText primary="Halls" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="send-notifications" disablePadding>
          <ListItemButton onClick={() => navigate("/send-notification")}>
            <ListItemIcon>
              <NotificationsIcon sx={btnStyle} />
              <ListItemText primary="Send Notifications" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        {/* <ListItem key="History" disablePadding>
          <ListItemButton onClick={() => navigate("/history")}>
            <ListItemIcon>
              <HistoryIcon />
              <ListItemText primary="History" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider /> */}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#CC8A00", margin: 0, padding: 0 }}
    >
      <Toolbar>
        <IconButton color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, ml: "20px" }}
        >
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            BookLab
          </Link>
        </Typography>
        <NotificationMenu />
        <AccountMenu />
      </Toolbar>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </AppBar>
  );
}

export default NavBar;
