import "./App.css";
import fecha from "fecha";
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
  id: number;
  title: string;
  text: string;
  date: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [favNotes, setFavNotes] = useState<Note[]>([]);
  const [noteError, setNoteError] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const now = new Date();
  const formattedDate = fecha.format(now, "MMM D, hh:mm A");

  function addNote(e) {
    e.preventDefault();
    setNoteError(false);

    const noteTitle = title.trim() === "" ? "Untitled" : title;

    if (inputValue == "") {
      setNoteError(true);
    }

    const newNote: Note = {
      //FIXME: id
      id: notes.length + 1,
      title: noteTitle,
      text: inputValue,
      date: formattedDate,
    };

    setNotes([...notes, newNote]);
    setInputValue("");
    setTitle("");
    setNoteError(false);
  }

  const deleteNote = (noteId: number) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const favoriteNote = (noteId: number) => {
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
        <Form
          {...{
            addNote,
            title,
            setTitle,
            inputValue,
            setInputValue,
            noteError,
          }}
        />
      </Container>
      <Box paddingLeft={15} paddingRight={15}>
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          favoriteNote={favoriteNote}
          handleOpen={handleOpen}
        />
        {/* Favorite NotesList
        <NotesList
          notes={favNotes}
          deleteNote={deleteNote}
          favoriteNote={favoriteNote}
        /> */}
      </Box>
      <EditModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
}

export default App;
