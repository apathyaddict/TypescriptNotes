import React from "react";
import Grid from "@mui/material/Grid";
import Note from "./Note";

interface Props {
  notes: { id: number; title: string; text: string; date: string }[];
}

const NotesList = ({ notes }: Props) => {
  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item key={note.id}>
          <Note note={note} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NotesList;
