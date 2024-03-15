const { log } = require("console");
const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.bold.green.inverse(`added note with title: ${title}`));
    saveNotes(notes);
  } else {
    console.log(
      chalk.red.bold.inverse("a note with that title already exists")
    );
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const note = notes.filter((note) => {
    return note.title === title ? true : false;
  });

  if (note.length === 0) {
    console.log(chalk.red.bold.inverse("there is not a note with that title"));
  } else {
    const newNotes = notes.filter((note) => {
      return note.title !== title ? true : false;
    });
    console.log(chalk.bold.green.inverse(`removed note with title: ${title}`));
    saveNotes(newNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.magenta.bold.inverse("List of all notes:"));
  notes.forEach((note) => {
    console.log(chalk.blueBright.bold.inverse.underline(`${note.title}:`));
    console.log(chalk.blue.bold(note.body));
    console.log("--------------------------------------------------------");
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.filter((note) => note.title === title);

  if (note.length === 0) {
    console.log(chalk.red.bold.inverse("there is not a note with that title"));
  } else {
    console.log(chalk.cyan.bold.inverse.underline(`${note[0].title}:`));
    console.log(chalk.white.bold(note[0].body));
    console.log("--------------------------------------------------------");
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
