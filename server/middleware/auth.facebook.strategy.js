const passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

module.exports = new FacebookStrategy(
  {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
  },
  function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    done(null, profile);
    // });
  }
);
