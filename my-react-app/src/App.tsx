import "./App.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import NotesList from "./components/NotesList";
import EditModal from "./components/EditModal";
import Form from "./components/Form";

interface Note {
  id: string;
  title: string;
  text: string;
  date: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [favNotes, setFavNotes] = useState<Note[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addNote = (newNote: {
    id: string;
    title: string;
    text: string;
    date: string;
  }) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteId: string) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const favoriteNote = (noteId: string) => {
    const noteToFavorite = notes.find((note) => note.id === noteId);
    if (noteToFavorite) {
      if (!favNotes.some((favNote) => favNote.id === noteId)) {
        setFavNotes([...favNotes, noteToFavorite]);
      }
    }
  };

  return (
    <>
      <Container fixed maxWidth="sm" sx={{ padding: 3 }}>
        <Typography variant="h3" gutterBottom>
          Reminders
        </Typography>
        <Box>
          <Form
            {...{
              addNote,
              setOpen,
              handleClose,
            }}
          />
        </Box>
      </Container>
      <Box paddingLeft={15} paddingRight={15}>
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          favoriteNote={favoriteNote}
        />
        {/* Favorite NotesList
        <NotesList
          notes={favNotes}
          deleteNote={deleteNote}
          favoriteNote={favoriteNote}
        /> */}
      </Box>
    </>
  );
}

export default App;
