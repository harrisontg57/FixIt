var mysql = require('mysql');
//var express = require('express');
//var app = express();

// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, X-http-method-override");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   next(); // we need to call it to pass control for other handlers
// });

// app.use(express.json());

// var server = app.listen(3000, function(){
//   console.log("Start listening at port 3000");
// });

var conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'users',
  port: 8889
})

module.exports = conn;

// conn.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!");
// })

// conn.query('SELECT * FROM users_table;', function(err, rows, fields){
//   if(!err){
//     console.log("Output: ", rows);
//   }else{
//     console.log("Error while performing query");
//     console.log(err);
//   }
// })

// conn.end(function(){
//   console.log("connection ended!");
// });
