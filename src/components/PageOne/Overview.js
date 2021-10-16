import ArticleIcon from "@mui/icons-material/Article";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Card,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
const Overview = () => {
  return (
    <Card sx={{ height: "40vh", margin: 2 }}>
      <Card sx={{ display: "flex", mb: 3 }}>
        <CardHeader sx={{ flexGrow: 1 }} title="Overview"></CardHeader>
        <Button sx={{ m: 3 }} color="inherit" variant="outlined">
          Create
        </Button>
        <Button color="inherit">
          <MoreVertIcon></MoreVertIcon>
        </Button>
      </Card>
      <Grid container item lg={12}>
        <Grid lg={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayIcon></CalendarTodayIcon>
              </ListItemIcon>
              <ListItemText>
                {" "}
                <Typography>Batch start date</Typography>{" "}
                <Typography>03/10/21</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MenuBookIcon></MenuBookIcon>
              </ListItemIcon>
              <ListItemText>
                {" "}
                <Typography>Course</Typography>{" "}
                <Typography color="primary">Add Course </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArticleIcon></ArticleIcon>
              </ListItemIcon>
              <ListItemText>
                {" "}
                <Typography>Subject</Typography>{" "}
                <Typography color="primary">Add Subjects</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid lg={6}>
          <ListItem>
            <ListItemIcon>
              <Grid3x3Icon></Grid3x3Icon>
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Typography>Batch Code</Typography> <Typography>AbT2y</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MenuBookIcon></MenuBookIcon>
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Typography>Category</Typography>{" "}
              <Typography>No Category</Typography>
            </ListItemText>
          </ListItem>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Overview;
