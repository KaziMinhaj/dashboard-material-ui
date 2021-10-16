import { Card, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function Middle(props) {
  return (
    <Container>
      <TextField sx={{ mt: 2 }} required fullWidth label="Search exams" />
      <Typography sx={{ mt: 2, mb: 2 }}>Bank PO/Railways (2)</Typography>
      <Grid container>
        <Grid lg={6} sm={12} columnSpacing={2}>
          <Card sx={{ p: 2, m: 1 }}>Bank PO</Card>
        </Grid>
        <Grid lg={6} sm={12}>
          <Card sx={{ p: 2, m: 1 }}>Railways</Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Middle;
