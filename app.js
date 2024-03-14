const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

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
  handler: function (argv) {
    console.log(argv.title);
    console.log(argv.body);
  },
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
  handler: function () {
    console.log("removing a new note");
  },
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
