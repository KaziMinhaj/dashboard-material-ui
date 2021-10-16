import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import { Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const LiveClasses = () => {
  return (
    <Grid lg={12} md={12}>
      <Paper
        sx={{
          height: "25vh",
          marginTop: 2,
          marginRight: 3,
        }}
      >
        <Card>
          <Typography sx={{ display: "flex", margin: 2 }}>
            <Typography>Live classes</Typography>
            <Typography
              sx={{ bgcolor: "red", color: "white", pr: 1, pl: 1, ml: 0.5 }}
            >
              New
            </Typography>
          </Typography>
        </Card>
        <Typography variant="body2" sx={{ p: 1, m: 1 }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </Typography>
        <Card
          sx={{
            m: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="outlined"
        >
          <PodcastsOutlinedIcon color="error"></PodcastsOutlinedIcon>
          <Typography
            align="center"
            sx={{
              padding: 2,
            }}
          >
            GO LIVE NOW
          </Typography>
        </Card>
      </Paper>
    </Grid>
  );
};

export default LiveClasses;
