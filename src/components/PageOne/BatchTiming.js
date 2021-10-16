import {
  Button,
  Card,
  CardHeader,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import calendar from "./cal.svg";

const useStyle = makeStyles({
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20%",
  },
});

const BatchTiming = () => {
  const classes = useStyle();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ height: "42vh", margin: 2 }}>
      <Card sx={{ display: "flex" }}>
        <CardHeader sx={{ flexGrow: 1 }} title="Batch Timing"></CardHeader>
        <Button sx={{ m: 3 }} color="inherit" variant="outlined">
          + Add
        </Button>
      </Card>
      <Grid item lg={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Sunday" />
          <Tab value="two" label="Monday" />
          <Tab value="three" label="Tuesday" />
          <Tab value="four" label="Wednesday" />
          <Tab value="five" label="Thusday" />
          <Tab value="six" label="Friday" />
          <Tab value="seven" label="Saturday" />
        </Tabs>
        <img src={calendar} className={classes.image} alt="cal" />
        <Typography align="center">No Classes</Typography>
        <Typography align="center">
          Click "add" button to create classes{" "}
        </Typography>
      </Grid>
    </Card>
  );
};

export default BatchTiming;
