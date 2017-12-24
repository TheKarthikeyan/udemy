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
  addStatus = notes.addNote(argv.title, argv.body);
  if(_.eq(undefined,addStatus)){
    console.log("Duplicate note entered")
  } else {
    console.log("Successfully saved note ");
    console.log("---");
    console.log(`Title: ${addStatus.title}`);
    console.log(`Body: ${addStatus.body}`);
  }
} else if(command === 'list') {
  notes.getAll();
} else if(command === 'read') {
  notes.getNote(argv.title);
} else if(command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note Successfully removed': 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognised');
}
