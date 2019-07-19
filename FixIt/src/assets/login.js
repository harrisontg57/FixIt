var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'users',
  port: 8889
})

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'users',
  port: 8889
});

conn.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
})

function checkCredentials(user){
    console.log("made it to this function");
    var res = queryCredentials(user);
    console.log(res);
}

function queryCredentials(user){
  pool.query(
    `
    SELECT *
    FROM users_table
    WHERE username=$username AND password=$password
    `, {$username:user.username, $password:user.password}
    );
}