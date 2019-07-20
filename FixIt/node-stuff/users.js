var db = require('./index');

var User = {
  getUsers: function(callback)
  {
    return db.query(`
    SELECT *
    FROM users_table;
    `, callback)
  },
  loginUser: function(User, callback)
  {
    return db.query(`
    SELECT * 
    FROM users_table
    WHERE username=$username AND password=$password;
    `, 
    {$username: User.username, $password: User.password},
    callback);
  },
  registerUser: function(User, callback)
  {
    return db.query('Insert into users_table(username, password) values(?, ?)',[User.username, User.password], callback)
  }
}

module.exports = User;