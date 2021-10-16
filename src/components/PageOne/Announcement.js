import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AnnouncementImage from "./announceIcon.svg";
const useStyle = makeStyles({
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    width: "20%",
  },
});

function Announcement() {
  const classes = useStyle();
  return (
    <Grid lg={12}>
      <Card
        sx={{
          height: "30vh",
          marginTop: 2,
          marginRight: 3,
        }}
      >
        <Card sx={{ display: "flex" }}>
          <CardHeader
            sx={{ flexGrow: 1 }}
            avatar={<Avatar src="/announce.svg" />}
            title="Recent Announcement"
          ></CardHeader>
          <Button sx={{ m: 3 }} color="inherit" variant="outlined">
            Create
          </Button>
        </Card>

        <CardContent>
          <img className={classes.img} src={AnnouncementImage} alt="" />
          <Typography align="center">No Recent Announcement</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Announcement;
