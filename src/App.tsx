import "./App.css";
import { useState } from "react";
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
  const [deletedNotes, setDeletedNotes] = useState<Note[]>([]);

  const [open, setOpen] = useState<boolean>(false);

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
    const deletedNote = notes.find((note) => note.id === noteId);
    if (deletedNote) {
      setDeletedNotes([...deletedNotes, deletedNote]);
    }
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

  if (open) {
    console.log("The 'open' variable is true.");
  }

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
                  deletedNotes,
                  displayType: "favorites",
                }}
              />
            }
          />

          <Route
            path="/deleted"
            element={
              <FavoriteList
                {...{
                  favNotes,
                  handleClose,
                  deleteNote,
                  favoriteNote,
                  deletedNotes,
                  displayType: "deleted",
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
