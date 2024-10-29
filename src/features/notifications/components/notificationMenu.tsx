import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Divider } from "@mui/material";
import NotificationComponent from "./notificationComponent";
import { useNavigate } from "react-router-dom";

export default function NotificationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {/* <NotificationComponent description="pakata" title="ashan" /> */}
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            navigate("/notifications");
          }}
          sx={{ color: "#3694F2" }}
        >
          See all
        </MenuItem>
      </Menu>
    </div>
  );
}
