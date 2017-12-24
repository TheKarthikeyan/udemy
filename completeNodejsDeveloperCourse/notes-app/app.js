console.log('Starting app.js')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]
console.log('Command: ',command);
console.log('Yargs ',argv);

if(command === 'add') {
  note = notes.addNote(argv.title, argv.body);
  if(_.eq(undefined,note)){
    console.log("Duplicate note entered")
  } else {
    console.log("Successfully saved note ");
    notes.logNote(note);
  }
} else if(command === 'list') {
  notes.getAll();
} else if(command === 'read') {
  var note = notes.getNote(argv.title);
  if(_.eq(undefined,note)){
    console.log("Note not found")
  } else {
    console.log("Successfully read note ");
    notes.logNote(note);
  }
} else if(command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note Successfully removed': 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognised');
}
