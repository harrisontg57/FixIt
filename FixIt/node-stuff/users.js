var db = require('./index');
//Makes calls to the SQL server
var User = {
  getUsers: function(callback)
  {
    return db.query(`SELECT * FROM users_table;`, callback);
  },
  loginUser: function(User, callback)
  {
    return db.query(`SELECT * FROM users_table WHERE username=? AND password=?;`, 
    [User.username, User.password],
    callback);
  },
  alterLogin: function(User, callback)
  {
    return db.query(`UPDATE users_table SET loggedIN=? WHERE username=?`
    [User.loggedIn, User.username], callback);
  },
  registerUser: function(User, callback)
  {
    return db.query(`INSERT INTO users_table(firstname, lastname, email, username, password, loggedIn) VALUES(?, ?, ?, ?, ?, ?);`,
    [User.firstname, User.lastname, User.email, User.username, User.password, User.loggedIn], callback);
  }
}

module.exports = User;