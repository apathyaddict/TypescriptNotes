import React from "react";
import Grid from "@mui/material/Grid";
import Note from "./Note";

interface Props {
  notes: { id: number; title: string; text: string; date: string }[];
  deleteNote: (noteId: number) => void; //This part represents the return type of the function. void is a type in TypeScript that means the function doesn't return any value.
  favoriteNote: (noteId: number) => void;
}

const NotesList = ({ notes, deleteNote, favoriteNote }: Props) => {
  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item key={note.id}>
          <Note
            note={note}
            deleteNote={deleteNote}
            favoriteNote={favoriteNote}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NotesList;
