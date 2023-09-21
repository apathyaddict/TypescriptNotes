import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

interface NoteProps {
  note: { id: number; title: string };
}

const Note = ({ note }: NoteProps) => {
  return (
    <Card
      sx={{
        minWidth: 275,
      }}
      key={note.id}
    >
      <CardContent>
        <Typography variant="body2">{note.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
