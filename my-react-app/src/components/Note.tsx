import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardMedia, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface NoteProps {
  note: { id: number; title: string; text: string; date: string };
  deleteNote: (noteId: number) => void;
}

const Note = ({ note, deleteNote }: NoteProps) => {
  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 275,
        display: "flex",
        flexDirection: "column",
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
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          {note.date}
        </Typography>
        <Typography variant="h5" component="div">
          {note.title}
        </Typography>
        <Typography variant="body2">{note.text}</Typography>
      </CardContent>
      <div style={{ marginLeft: "auto" }}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default Note;
