import { DeleteOutline } from "@mui/icons-material";
// import CardContent from '@mui/material/CardContent';
import { Avatar, CardContent, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { blue, deepOrange, green, pink } from "@mui/material/colors";
import React from "react";

const NoteCard = ({ note, handleDelete }) => {
  const backgroundColor = () => {
    if (note.category == "Work") {
      return blue[700];
    }
    if (note.category == "Money") {
      return green[500];
    }
    if (note.category == "Todos") {
      return pink[500];
    }
    return deepOrange[500];
  };

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: backgroundColor }}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline></DeleteOutline>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
