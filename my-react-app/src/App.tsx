import "./App.css";
import { useState } from "react";
import NotesList from "./components/NotesList";
import ButtonAppBar from "./components/ButtonAppBar";

import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteList from "./components/FavoriteList";

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
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                {...{
                  addNote,
                  handleClose,
                  notes,
                  deleteNote,
                  favoriteNote,
                }}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoriteList
                {...{
                  favNotes,
                  handleClose,
                  deleteNote,
                  favoriteNote,
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
