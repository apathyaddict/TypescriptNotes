import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";

interface NoteProps {
  note: { id: number; title: string; text: string };
}

const Note = ({ note }: NoteProps) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 275,
      }}
      key={note.id}
    >
      <CardMedia
        component="img"
        height="94"
        image="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {note.title}
        </Typography>
        <Typography variant="body2">{note.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
