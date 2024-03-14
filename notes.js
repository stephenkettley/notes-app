const { log } = require("console");
const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title ? true : false;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
  } else {
    console.log("a note with that title already exists");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const note = notes.filter(function (note) {
    return note.title === title ? true : false;
  });

  if (note.length === 0) {
    console.log("there is not a note with that title");
  } else {
    const newNotes = notes.filter(function (note) {
      return note.title !== title ? true : false;
    });
    saveNotes(newNotes);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
