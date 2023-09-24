import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import fecha from "fecha";
import SaveIcon from "@mui/icons-material/Save";
import { nanoid } from "nanoid";

interface FormProps {
  addNote: (note: Note) => void;
  selected: {
    id: string;
    title: string;
    text: string;
    date: string;
  };
  setOpen: (open: boolean) => void;
  handleClose: () => void;
}

interface Note {
  id: string;
  title: string;
  text: string;
  date: string;
}

const Form = ({ addNote, selected, setOpen, handleClose }: FormProps) => {
  const [inputValue, setInputValue] = useState<string>(
    selected ? selected.text : ""
  );
  const [title, setTitle] = useState<string>(selected ? selected.title : "");
  const [noteError, setNoteError] = useState<boolean>(false);

  //const [text, setText] = useState(selectedNote ? selectedNote.text : "");

  const now = new Date();
  const formattedDate = fecha.format(now, "MMM D, hh:mm A");

  function handleSubmit(e) {
    e.preventDefault();
    setNoteError(false);

    const noteTitle = title.trim() === "" ? "Untitled" : title;

    if (inputValue == "") {
      setNoteError(true);
    }

    const newNote: Note = {
      id: selected ? selected.id : nanoid(),
      title: noteTitle,
      text: inputValue,
      date: formattedDate,
    };

    if (!selected) {
      addNote(newNote);
      setInputValue("");
      setTitle("");
      setNoteError(false);
    } else {
      selected.title = title;
      selected.text = inputValue;
      handleClose();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        {!selected ? (
          <Button
            variant="contained"
            startIcon={<span className="material-icons">add</span>}
            type="submit"
          >
            Note
          </Button>
        ) : (
          <Button variant="contained" startIcon={<SaveIcon />} type="submit">
            save
          </Button>
        )}
      </Box>
    </form>
  );
};

export default Form;
