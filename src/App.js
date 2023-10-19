import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {collection, getDocs, getFireStore } from "firebase/firestore/lite";
import { app } from "./firebase";


class App extends Component {
  state = {
    notes: [],
  };

  
  async refreshNotres() {
    // let notesList = [];
    const db = getFireStore(app);
    const notesCol = collection(db, "notes");
    const notesSnapshot = await getDocs(notesCol);

    notesSnapshot.array.forEach((doc) => {
      let note = doc.data();
      note.id = doc.id;
    });

    this.setState({ notes: notesList });
  }

  componentDidMount() {
    this.refreshNotres();
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <h2>Todo List</h2>
        {notes.map(note => 
        <p>
          <b>* {note.description}</b>
        </p>
        )}
      </div>
    );
  }
}

export default App;
