console.log('Starting app.js')

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString("Karthik"));

var filteredArray = _.uniq([1,1,2,3,3,45,6,6,"Karthik","Karthik",1,"2"]);

console.log(filteredArray);

// var result = notes.addNote();
// console.log(result);

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//   if(err) {
//     console.log("Unable to write to file");
//   }
// });
