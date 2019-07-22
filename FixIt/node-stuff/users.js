var db = require('./index');

var User = {
  getUsers: function(callback)
  {
    return db.query(`SELECT *FROM users_table;`, callback)
  },
  loginUser: function(User, callback)
  {
    return db.query(`SELECT * FROM users_table WHERE username=$username AND password=$password;`, 
    {$username: User.username, $password: User.password},
    callback);
  },
  registerUser: function(User, callback)
  {
    return db.query('INSERT INTO users_table(first_name, last_name, email, username, password) VALUES($firstname, $lastname, $email, $username, $password)',
    {$firstname: User.firstname, $lastname: User.lastname, $Email: User.email, $username: User.username, $password: User.password}, callback)
  }
}

module.exports = User;