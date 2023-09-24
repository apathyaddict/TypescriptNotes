import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Note from "./Note";
import EditModal from "./EditModal";

interface Note {
  id: number;
  title: string;
  text: string;
  date: string;
}

interface Props {
  notes: { id: number; title: string; text: string; date: string }[];
  deleteNote: (noteId: number) => void; //This part represents the return type of the function. void is a type in TypeScript that means the function doesn't return any value.
  favoriteNote: (noteId: number) => void;
}

const NotesList = ({ notes, deleteNote, favoriteNote }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelectedNote] = useState<Note | null>(null);

  const handleOpen = (selected) => {
    setOpen(true);
    setSelectedNote(selected);
    console.log(selected);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container spacing={2}>
        {notes.map((note) => (
          <Grid item key={note.id}>
            <Note
              note={note}
              deleteNote={deleteNote}
              favoriteNote={favoriteNote}
              {...{ open, handleOpen, handleClose }}
            />
          </Grid>
        ))}
      </Grid>
      <EditModal {...{ open, handleOpen, handleClose, selected }} />
    </>
  );
};

export default NotesList;
