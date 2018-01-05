///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1990);

// function calculateAge(year) {
//   console.log(2017-year);
// }
//
//
// retirement(1965);
//
// var retirement = function(year) {
//   console.log(65- (2017-year));
// }
//
// console.log(age);
// var age = 25;
//
// function foo() {
//   var age = 65;
//   console.log(age);
// }
//
// foo();
// console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
calculateAge(1995);

function calculateAge(year) {
  console.log(2017 - year);
  console.log(this);
}

*/

var john = {
  name: 'john',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);
    /* function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1989
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();
