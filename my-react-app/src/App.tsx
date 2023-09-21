import "./App.css";
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
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [notes, setNotes] = useState<[]>([]);

  function addNote(e) {
    e.preventDefault();

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      text: inputValue,
    };

    setNotes([...notes, newNote]);
    setInputValue("");
    setTitle("");
  }

  return (
    <>
      <Container fixed maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          {" "}
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
              label="Forget me not"
              multiline
              rows={4}
              sx={{ width: "100%" }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
        <NotesList notes={notes} />
      </Box>
    </>
  );
}

export default App;
