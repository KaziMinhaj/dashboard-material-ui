import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PanoramaVerticalSelectIcon from "@mui/icons-material/PanoramaVerticalSelect";
import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  avatar: {
    marginLeft: 16,
  },
  menu: {
    display: "flex",
    flexGrow: 1,
  },

  spaceRight: {
    marginRight: 20,
  },
  appbar: {
    width: "80%",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} elevation={1} color="inherit">
      <Toolbar>
        <Typography m={2}>Batches</Typography>
        <Typography m={2}>Timetable</Typography>
        <Typography m={2}>Enquiry</Typography>
        <Typography m={2}>Chats</Typography>
        <Typography m={2}>App Downloads</Typography>
        <Typography m={2}>Study Materials</Typography>
        <Typography m={2}>Store</Typography>
        <Typography>
          <Typography m={2}>Cupon Code</Typography>
        </Typography>
        <Typography m={2}>Enquiry</Typography>
        <Typography className={classes.menu}>Payments</Typography>
        <PanoramaVerticalSelectIcon
          className={classes.spaceRight}
        ></PanoramaVerticalSelectIcon>
        <DonutLargeIcon className={classes.spaceRight}></DonutLargeIcon>
        <NotificationsIcon></NotificationsIcon>
        <Avatar sx={{ bgcolor: red[500] }} className={classes.avatar}>
          K
        </Avatar>
        <Typography avatar={<Avatar sx={{ bgcolor: pink }}>K</Avatar>} m={2}>
          Kazi
        </Typography>
        <ArrowDropDownIcon />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
