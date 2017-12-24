const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
}
const bodyOption = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}
const argv = yargs
        .command('add', 'Add a new note', {
          title: titleOption,
          body: bodyOption
        })
        .command('list', 'List all notes')
        .command('read', 'Read a note',{
          title: titleOption
        })
        .command('remove', 'Remove a note', {
          title: titleOption
        })
        .help()
        .argv;
var command = argv._[0]

if(command === 'add') {
  note = notes.addNote(argv.title, argv.body);
  if(_.eq(undefined,note)){
    console.log("Duplicate note entered")
  } else {
    console.log("Successfully saved note ");
    notes.logNote(note);
  }
} else if(command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

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
