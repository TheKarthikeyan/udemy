var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Sun'
  };
  setTimeout(()=> {
    callback(user);
  }, 3000);
};


getUser(37, (user) => {
  console.log(user);
});
