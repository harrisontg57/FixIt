var db = require('./index');

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
  registerUser: function(User, callback)
  {
    return db.query(`INSERT INTO users_table(first_name, last_name, email, username, password) VALUES(?, ?, ?, ?, ?);`,
    [User.firstname, User.lastname, User.email, User.username, User.password], callback);
  }
}

module.exports = User;