import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from './services/notes';

const App = () => {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
<<<<<<< HEAD
        setNotes(initialNotes);
=======
        setNotes(initialNotes)
>>>>>>> dev
      })    
  }, []);

  const toogleImportanceOf = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(retornedNote => {
        setNotes(notes.map(note => note.id !== id ? note : retornedNote))
      })
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    noteService
      .create(noteObject)
      .then(retornedNote => {
        setNotes(notes.concat(retornedNote));
        setNewNote("");
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
          key={note.id}
          note={note}
          toogleImportance={() => toogleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
