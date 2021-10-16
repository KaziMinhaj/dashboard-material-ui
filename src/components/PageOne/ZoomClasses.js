import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function ZoomClasses() {
  return (
    <Grid lg={12}>
      <Card
        sx={{
          height: "25vh",
          marginTop: 2,
          marginRight: 3,
        }}
      >
        <Card>
          <CardHeader
            avatar={<Avatar src="/zoom.svg" />}
            title="Zoom Classes"
          ></CardHeader>
        </Card>
        <CardContent>
          <Typography>
            Set up your zoom account from your institution
          </Typography>
        </CardContent>
        <Card
          sx={{
            m: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="outlined"
        >
          <Typography align="center">
            <PlayCircleOutlineOutlinedIcon color="success"></PlayCircleOutlineOutlinedIcon>
          </Typography>
          <Typography
            align="center"
            sx={{
              padding: 2,
            }}
          >
            WATCH HELP VIDEOS
          </Typography>
        </Card>
      </Card>
    </Grid>
  );
}

export default ZoomClasses;
