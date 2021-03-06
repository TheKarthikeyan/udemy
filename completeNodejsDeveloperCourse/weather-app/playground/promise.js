var asyncAdd = (a, b) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('Arguements must be numbers');
      }
    }, 1500);
  });
}

asyncAdd(1,5).then((res)=> {
  console.log('Result: ',res);
  return asyncAdd(res, '33')
}, (errorMessage)=> {
  console.log(errorMessage);
}).then((res)=> {
  console.log('Should be 39: ', res);
}, (errorMessage)=> {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     //resolve(`Hey it worked`);
//     reject(`Unable to fulfill promise`);
//   }, 2500);
// });
//
//
// somePromise.then((message)=> {
//   console.log(`Success: `, message);
// }, (errorMessage)=> {
//   console.log('Error: ',errorMessage);
// });
