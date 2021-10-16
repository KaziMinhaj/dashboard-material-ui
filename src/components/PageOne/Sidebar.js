import BorderColorIcon from "@mui/icons-material/BorderColor";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CampaignIcon from "@mui/icons-material/Campaign";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ListIcon from "@mui/icons-material/List";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PeopleIcon from "@mui/icons-material/People";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  drawer: {
    width: 240,
  },
  drawPaper: {
    width: 240,
    marginTop: 65,
  },
});

const menuItems = [
  {
    text: "Overview",
    icon: <ListIcon color="inherit"></ListIcon>,
    path: "/",
  },
  {
    text: "Attendance",
    icon: <CalendarTodayIcon color="inherit"></CalendarTodayIcon>,
    path: "/",
  },
  {
    text: "Students",
    icon: <PeopleIcon color="inherit"></PeopleIcon>,
    path: "/",
  },
  {
    text: "Assignment",
    icon: <BorderColorIcon color="inherit" />,
    path: "",
  },
  {
    text: "Annoucements",
    icon: <CampaignIcon color="inherit" />,
    path: "",
  },
  {
    text: "Tests",
    icon: <BorderColorIcon color="inherit" />,
    path: "",
  },
  {
    text: "Videos",
    icon: <LocalMoviesIcon color="inherit" />,
    path: "",
  },
  {
    text: "Live classes",
    icon: <LiveTvOutlinedIcon color="inherit" />,
    path: "",
  },
  {
    text: "Study Materials",
    icon: <ImportContactsOutlinedIcon color="inherit" />,
    path: "",
  },
  {
    text: "Settings",
    icon: <SettingsOutlinedIcon color="inherit" />,
    path: "",
  },
];

function Sidebar() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawPaper }}
    >
      {/* {list and links} */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} button onClick={() => {}}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
