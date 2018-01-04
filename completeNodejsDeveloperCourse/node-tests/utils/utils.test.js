const expect = require('expect');
const utils = require('./utils.js')

describe('Utils', () => {

  describe('#add', () => {
    it('Should aync add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
    it('should add two numbers', () => {
      var result = utils.add(33,11);
      expect(result).toBe(44).toBeA('number');

    });
  });

  it('should square a number', (done) => {
    utils.square(10, (result)=> {
      expect(result).toBe(100).toBeA('number');
      done();
    });

  });
});



it('should verify first and last names are set', () => {
  var user = {
    age: 23,
    location: 'Chennai'
  }
  var resultUser = utils.setName(user, 'Karthikeyan Malaisamy');

  expect(resultUser).toInclude({
    firstName: 'Karthikeyan',
    lastName: 'Malaisamy'
  });
})



// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'karthik'}).toNotEqual({name: 'Karthik'});
//   // expect([2,3,4]).toInclude(2);
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Karthik',
//     age: 23,
//     location: 'Chennai'
//   }).toExclude({
//     age: 25
//   })
// });
