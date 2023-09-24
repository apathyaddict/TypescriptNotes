import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardMedia, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";

interface NoteProps {
  note: { id: string; title: string; text: string; date: string };
  deleteNote: (noteId: string) => void;
  favoriteNote: (noteId: string) => void;
  handleOpen: () => void;
}

const Note = ({ note, deleteNote, favoriteNote, handleOpen }: NoteProps) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleFavorite = () => {
    favoriteNote(note.id);
    setIsFavorited((prevIsFavorited) => !prevIsFavorited);
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
        alt="notes image"
      />
      <CardContent>
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          {note.date}
        </Typography>
        <Typography variant="h6" component="div">
          {note.title}
        </Typography>
        <Typography variant="body2">{note.text}</Typography>
      </CardContent>
      <div style={{ marginLeft: "auto" }}>
        <CardActions disableSpacing>
          <IconButton aria-label="edit" onClick={() => handleOpen(note)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="add to favorites" onClick={handleFavorite}>
            <FavoriteIcon className={isFavorited ? "favorited" : ""} />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default Note;
