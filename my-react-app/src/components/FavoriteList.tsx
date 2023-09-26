import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Note from "./Note";
import EditModal from "./EditModal";
import { Box } from "@mui/material";

interface FavNoteProps {
  favNotes: { id: string; title: string; text: string; date: string }[];
  deletedNotes: { id: string; title: string; text: string; date: string }[];
  handleClose: () => void;
  notes: { id: string; title: string; text: string; date: string }[];
  deleteNote: (noteId: string) => void; //This part represents the return type of the function. void is a type in TypeScript that means the function doesn't return any value.
  favoriteNote: (noteId: string) => void;
  displayType: "favorites" | "deleted";
}

const FavoriteList = ({
  favNotes,
  handleClose,
  deleteNote,
  favoriteNote,
  deletedNotes,
  displayType,
  notes,
}: FavNoteProps) => {
  const displayedNotes = displayType === "favorites" ? favNotes : deletedNotes;

  return (
    <Box paddingLeft={15} paddingRight={15} paddingTop={15}>
      <Grid container spacing={2}>
        {displayedNotes.map((note) => (
          <Grid item key={note.id}>
            <Note
              note={note}
              deleteNote={deleteNote}
              favoriteNote={favoriteNote}
              {...{ open, handleClose }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FavoriteList;
