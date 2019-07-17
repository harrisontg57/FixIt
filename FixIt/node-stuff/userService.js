const bcrypt = require('bcryptjs');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./node-stuff/users.db');

var service = {

    findUser: function(username, callback){

        db.get('SELECT * FROM users WHERE username=$username',{$username:username}, function(err, row){
            if (err){
                callback()
            } else{
                callback(row)
            }
        });
    },

    registerUser: function(user, callback){
        // check that all fields are present
        if (!user.name || !user.email || !user.password || !user.password2){
            callback(undefined);
            return;
        }

        this.findUser(user.username, (foundUser) =>{
            if (foundUser){
                callback(undefined);
                return
            }

            // create a password with a salt
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw err;
                    user.password = hash;
                    delete user.password2;
                    user.id = id++;
                    user.status = 'user';
                    // save the user to db
                    db.run(`INSERT INTO users(firstName, lastName, id, status, email, username, password)
                    VALUES ($firstName, $lastName, $id, $status, $email, $username, $password)`,{
                      $firstName: user.firstName,
                      $lastName: user.lastName,
                      $id: user.id,
                      $email: user.email,  
                      $username: user.username, 
                      $password: user.password
                    }, function(err){
                        if (err){
                            callback(undefined);
                            return;
                        }
                        callback(this.lastID)
                    })
                });
            });
        })
    },

    getUsers: function(callback){
        db.all('SELECT * FROM users', function(err, rows){
            if (err){
                callback()
            } else{
                callback(rows)
            }
        })
    }
}

module.exports = service;