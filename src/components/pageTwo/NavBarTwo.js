import { AppBar, Card, Toolbar, Typography } from "@mui/material";
import React from "react";

function NavBarTwo(props) {
  return (
    <>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h6"
            color="inherit"
            component="div"
          >
            Welcome, Learning Light
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            powered by ClassPlus
          </Typography>
        </Toolbar>
      </AppBar>
      <Card sx={{ mt: 2, mb: 1 }} elevation={1}>
        <Typography sx={{ p: 2 }} align="center" variant="h5">
          Help us know your Area of Expertise
        </Typography>
      </Card>
    </>
  );
}

export default NavBarTwo;
