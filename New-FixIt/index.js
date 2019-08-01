var mysql = require('mysql');

var conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'users',
  port: 8889
})

module.exports = conn;
