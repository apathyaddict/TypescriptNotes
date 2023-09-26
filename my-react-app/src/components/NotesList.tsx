import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Note from "./Note";
import EditModal from "./EditModal";
import { Box } from "@mui/material";

interface Note {
  id: string;
  title: string;
  text: string;
  date: string;
}

interface Props {
  notes: { id: string; title: string; text: string; date: string }[];
  deleteNote: (noteId: string) => void; //This part represents the return type of the function. void is a type in TypeScript that means the function doesn't return any value.
  favoriteNote: (noteId: string) => void;
}

const NotesList = ({ notes, deleteNote, favoriteNote }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelectedNote] = useState<Note | null>(null);

  const handleOpen = (selected: {
    id: string;
    title: string;
    text: string;
    date: string;
  }) => {
    setOpen(true);
    setSelectedNote(selected);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box paddingLeft={15} paddingRight={15}>
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
      </Box>
      <EditModal {...{ open, handleOpen, handleClose, selected }} />
    </>
  );
};

export default NotesList;
