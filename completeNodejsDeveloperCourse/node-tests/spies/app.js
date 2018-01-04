var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check email exists
  db.saveUser({email, password});
  // Send welcome email
};
