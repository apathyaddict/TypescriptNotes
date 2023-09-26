import React from "react";
import { Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Form from "../components/Form";
import NotesList from "../components/NotesList";

interface Note {
  id: string;
  title: string;
  text: string;
  date: string;
}

interface FormProps {
  addNote: (note: Note) => void;
  selected: {
    id: string;
    title: string;
    text: string;
    date: string;
  };
  //   setOpen: (open: boolean) => void;
  handleClose: () => void;
  // handleOpen: () => void;
  notes: { id: string; title: string; text: string; date: string }[];
  deleteNote: (noteId: string) => void; //This part represents the return type of the function. void is a type in TypeScript that means the function doesn't return any value.
  favoriteNote: (noteId: string) => void;
}

const Home = ({
  addNote,
  handleClose,
  notes,
  deleteNote,
  favoriteNote, // handleOpen,
}: FormProps) => {
  return (
    <>
      <Container fixed maxWidth="sm" sx={{ padding: 3 }}>
        <Typography variant="h3" gutterBottom>
          Things to Remember...
        </Typography>
        <Box>
          <Form
            {...{
              addNote,
              handleClose,
            }}
          />
        </Box>
      </Container>

      <NotesList
        notes={notes}
        deleteNote={deleteNote}
        favoriteNote={favoriteNote}
        // handleOpen={handelOpen}
      />
    </>
  );
};

export default Home;
