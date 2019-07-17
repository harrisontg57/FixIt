var sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'mydata.db');
var db = new sqlite3.Database(dbPath);

module.exports = function (callback){
    console.log("Start DB init");
    console.log(db);
    console.log(dbPath);
    // it will run each query one by one
    db.serialize(function (){
        console.log('users');
        // create users table
        db.run(`
            CREATE TABLE IF NOT EXISTS "users" (
                "firstName"	TEXT,
                "lastName" TEXT,
                "id"	INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                "status"	TEXT,
                "email"	TEXT NOT NULL UNIQUE,
                "username" TEXT NOT NULL
                "password"	TEXT NOT NULL
            );`,(res)=>{
                console.log(res);
                callback(res)
            });
        });
    db.close();
}