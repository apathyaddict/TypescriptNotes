import { Box, Button, TextField } from "@mui/material";
import React from "react";

interface FormProps {
  addNote: () => void;
  title: string;
  setTitle: (title: string) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  noteError: boolean;
}

const Form = ({
  addNote,
  title,
  setTitle,
  inputValue,
  setInputValue,
  noteError,
}: FormProps) => {
  return (
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
  );
};

export default Form;
