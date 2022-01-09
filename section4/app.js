const notes = require('./notes');
const note = require('./notes');

var argv = process.argv;

notes.getNotes();
notes.addNewNotes(argv.title, argv.name);
