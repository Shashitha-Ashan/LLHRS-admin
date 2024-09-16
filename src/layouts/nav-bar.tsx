import { Link } from "react-router-dom";
import Constants from "../styles/styles";
import AccountMenu from "../components/profile-options";
import {
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  Tooltip,
} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BadgeIcon from "@mui/icons-material/Badge";
import HistoryIcon from "@mui/icons-material/History";

function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#4CAF50", margin: 0, padding: 0 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            Reserv
          </Link>
        </Typography>
        <Tooltip title="TimeTable" arrow>
          <Link style={linkStyle} to={"/time-table"}>
            <IconButton color="inherit" sx={Constants.navIconStyle}>
              <CalendarMonthIcon />
            </IconButton>
          </Link>
        </Tooltip>

        <Tooltip title="Users" arrow>
          <Link to={"/users"} style={linkStyle}>
            <IconButton color="inherit" sx={Constants.navIconStyle}>
              <GroupIcon />
            </IconButton>
          </Link>
        </Tooltip>

        <Tooltip title="Modules" arrow>
          <Link to={"/modules"} style={linkStyle}>
            <IconButton color="inherit" sx={Constants.navIconStyle}>
              <ViewModuleIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Batch Management Dashboard" arrow>
          <Link style={linkStyle} to={"/batches"}>
            <IconButton color="inherit" sx={Constants.navIconStyle}>
              <BadgeIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Halls" arrow>
          <Link style={linkStyle} to={"/halls"}>
            <IconButton color="inherit" sx={Constants.navIconStyle}>
              <ApartmentIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="History" arrow>
          <Link style={linkStyle} to={"/halls"}>
            <IconButton color="inherit" sx={Constants.navIconStyle}>
              <HistoryIcon />
            </IconButton>
          </Link>
        </Tooltip>

        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
