import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Announcement from "./Announcement";
import BatchTiming from "./BatchTiming";
import LiveClasses from "./LiveClasses";
import NavBar from "./NavBar";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import ZoomClasses from "./ZoomClasses";

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },

  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  title: {
    padding: 16,
  },

  toolbar: {
    marginTop: 70,
  },
  textColor: {
    color: "black",
  },

  middlePart: {
    height: "100%",
  },
});

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Sidebar />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={8}>
            <Grid lg={12}>
              <Overview></Overview>
            </Grid>
            <Grid lg={12}>
              <BatchTiming></BatchTiming>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <LiveClasses />
            <ZoomClasses />
            <Grid lg={12}>
              <Announcement></Announcement>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Layout;
