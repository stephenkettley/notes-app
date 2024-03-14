const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");
const fs = require("fs");

yargs.version("1.1.0");

// add
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "title of a new note",
      demandOption: true, // required
      type: "string",
    },
    body: {
      describe: "body text of new note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
});

// remove
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "title of note being removed",
      demandOption: true,
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

// list
yargs.command({
  command: "list",
  describe: "listing out all notes",
  handler: function () {
    console.log("listing out all notes");
  },
});

// read
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading a note");
  },
});

console.log(yargs.argv);
