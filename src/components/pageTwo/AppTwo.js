import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import Middle from "./Middle";
import NavBarTwo from "./NavBarTwo";
import RightSideBar from "./RightSideBar";
import SideBar from "./SideBar";
function AppTwo(props) {
  return (
    <Container>
      <NavBarTwo />
      <Grid container item>
        <Grid sx={{ height: "70vh" }} lg={3} sm={12}>
          <SideBar />
        </Grid>
        <Grid sx={{ height: "70vh" }} lg={6} sm={12}>
          <Middle />
        </Grid>
        <Grid sx={{ bgcolor: blue[100], height: "70vh", p: 2 }} lg={3} sm={12}>
          <RightSideBar />
        </Grid>
      </Grid>
      <Card elevation={0} sx={{ display: "flex", width: "100%", mt: 2, mr: 5 }}>
        <Typography sx={{ flexGrow: 1 }}></Typography>
        <Button variant="contained">Continue</Button>
      </Card>
    </Container>
  );
}

export default AppTwo;
