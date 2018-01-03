// var name = 'Karthik';
//
// console.log(name);
//
// var lastName = 'Malaisamy';
//
// console.log(lastName);
//
// var age = 23;
//
// console.log(age);
//
// var fullAge = true;
//
// console.log(fullAge);

// Lecture: variables 2

// var name = 'Karthik';
// var age = 23;
//
// // console.log(name+age);
// // console.log(age+age);
//
// var job, isMarried;
//
// console.log(job);
//
// job = 'Engineer';
// isMarried = false;
//
// console.log(name + ' ' + age + ' ' + job + ' ' +isMarried);
//
// age = 'twenty three';
// job = 'Data scientist';
//
// console.log(name + ' ' + age + ' ' + job + ' ' +isMarried);
//
// //var lastName = prompt('What is the last name?');
// // console.log(lastName);
//
// alert('Helloooooooooo');

// Lecture 3 Operators

// var now = 2017;
// var birthYear = now - 23;
//
// birthYear = now - 23 * 2;
//
// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;
//
// ageJohn = ageMark = (3 + 5) * 4 - 6;
//
// ageJohn++;
// ageMark *= 2;
//
// console.log(ageJohn);
// console.log(ageMark);

// Lecture: if-else statements

// var name = 'Karthik';
// var age = 23;
// var isMarried = 'yes';
//
// if (isMarried === 'yes') {
//   console.log(name +' is married.');
// } else {
//   console.log(name + ' is not married.');
// }
//
// isMarried = false;
//
// if (isMarried) {
//   console.log('Yes!');
// } else {
//   console.log('No!');
// }

// if (23 === '23') {
//   console.log('equal');
// }


//  Lecture: boolean logic and switch

// var age = 20;
//
// if (age < 20) {
//   console.log('He is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log('He is a young man');
// } else {
//   console.log('He is a man');
// }

// Coding challenge 1
// var height1 = 179;
// var age1 = 21;
//
// var height2 = 182;
// var age2 = 21;
//
// var height3 = 165;
// var age3 = 22;
//
// var score1 = height1 +  5*age1;
// var score2 = height2 +  5*age2;
// var score3 = height3 +  5*age3;
//
//
// if ( score1 >= score2 && score1 >= score3) {
//   console.log('Person1 wins with score '+score1);
// } else if (score1 >= score2) {
//   console.log('Person3 wins with score '+score3);
// } else {
//   console.log('Person2 wins with score'+score2);
// }

// Lecture Functions

// function calculateAge(yearOfBirth) {
//   var age = 2017 - yearOfBirth;
//   return age;
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
//
// console.log(ageJohn);
// console.log(ageMike);
// console.log(ageMary);
//
// function yearsUntilRetirement(name, yearOfBirth) {
//   var age = calculateAge(yearOfBirth);
//
//   if(age>60) {
//     console.log('retired');
//   } else {
//     console.log('Not retired');
//   }
// }
//
//
// yearsUntilRetirement('John', 1990);

// Lecture: Statements and expressions

// function someFun(par) {
//   //code
// }
//
// var someFun = function(par) {
//   //code
// }
//
// 3+4;
// var x = 3;
//
// // statements
//
// if (x===5) {
//   // do-something
// }


// Lecture Arrays

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[1]);
//
// names[1] = 'Ben';
//
// console.log(names[1]);
//
// names.push('Laila');
// names.unshift('Haha');
//
// console.log(names);
//
// names.pop();
// names.shift();
//
// console.log(names);
//
// console.log(names.indexOf('John'));

// // Lecture: Objects
//
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'Engineer',
//   isMarried: false
// }
//
// console.log(john['job']);
//
// john.lastName = 'Miller';
// john.job = 'Teacher';
//
// console.log(john);

// Lecture: Loops

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
function calculateAge(birthYear) {
  return 2017-birthYear;
}

function printFullAge(full1) {
  var full2 = []
  for(var i=0; i<years.length; i++) {
    var age = calculateAge(years[i]);
    if (age>=18) {
      full2.push(true);
    } else {
      full2.push(false);
    }
  }
  return full2;
}

var array = [1990, 1995, 2000, 2010, 1989, 1979, 2005];

var years = [];

for(var i=0; i< array.length; i++) {
  years.push(array[i]);
}

var full2 = printFullAge(years);

console.log(years);
console.log(full2);
