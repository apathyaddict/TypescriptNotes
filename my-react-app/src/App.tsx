import "./App.css";
import fecha from "fecha";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import NotesList from "./components/NotesList";

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
        <form onSubmit={addNote}>
          <Box
            border="primary"
            display="flex"
            flexDirection="column"
            alignItems="start"
          >
            <TextField
              id="outlined-password-input"
              label="Note Title"
              type="text"
              sx={{ width: "100%" }}
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Note"
              multiline
              rows={4}
              sx={{ width: "100%" }}
              value={inputValue}
              required
              error={noteError}
              helperText={noteError ? "Please enter a note." : ""}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              mt: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
              marginBottom: 4,
            }}
          >
            <Button
              variant="contained"
              startIcon={<span className="material-icons">add</span>}
              type="submit"
            >
              Note
            </Button>
          </Box>
        </form>
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
