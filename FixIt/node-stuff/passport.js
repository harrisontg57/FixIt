const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const userService = require('./userService');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      // Match user
      console.log('Auth local');
      userService.findUser(username, (user) =>{
        if (user){
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                console.log('match!')
                return done(null, user);
              } else {
                return done(null, false, { message: 'Password incorrect' });
              }
            });
        } else{
          return done(null, false, { message: 'User does not exist' });
        }
      })
    })
  );

  passport.serializeUser(function(user, done) {
    console.log('Ser');
    done(null, user.password);
  });

  passport.deserializeUser(function(username, done) {
    console.log('Des');
    var user = userService.findUser(username, (user) =>{
      done(null, user);
    });
    
  });
};