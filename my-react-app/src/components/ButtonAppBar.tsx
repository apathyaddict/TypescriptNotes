import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link, NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  // Function to get the current time in the "16:00" format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [currentTime, setCurrentTime] = React.useState<string>(
    getCurrentTime()
  );

  // Update the current time every minute
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavLink to="/" className="link">
              <IconButton aria-label="" color="inherit">
                <EditNoteIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/favorites" className="link">
              <IconButton aria-label="" color="inherit">
                <FavoriteIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/deleted" className="link">
              <IconButton aria-label="" color="inherit">
                <DeleteIcon />
              </IconButton>
            </NavLink>
          </Box>
          <Typography variant="h6" component="div">
            Hi, Stranger
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="h6" component="div" sx={{ ml: 1 }}>
              {currentTime}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
