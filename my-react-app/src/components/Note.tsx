import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardMedia, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";

interface NoteProps {
  note: { id: number; title: string; text: string; date: string };
  deleteNote: (noteId: number) => void;
  favoriteNote: (noteId: number) => void;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  selected: { id: number; title: string; text: string; date: string };
}

const Note = ({
  note,
  deleteNote,
  favoriteNote,
  open,
  handleClose,
  handleOpen,
  selected,
}: NoteProps) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleFavorite = () => {
    favoriteNote(note.id);
    setIsFavorited((prevIsFavorited) => !prevIsFavorited);
  };

  const handleEdit = () => {
    handleOpen();
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
        <Typography variant="h6" component="div">
          {note.title}
        </Typography>
        <Typography variant="body2">{note.text}</Typography>
      </CardContent>
      <div style={{ marginLeft: "auto" }}>
        <CardActions disableSpacing>
          <IconButton aria-label="edit" onClick={handleEdit}>
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
