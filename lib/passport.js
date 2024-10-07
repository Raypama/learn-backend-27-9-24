// require('dotenv').config() //harus diimport di main index tkt ada error
const {user} = require('../models')
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
  },
  async (payload, done) => {
    try {
      const users = await user.findByPk(payload.id);


      if (!users) {
        console.log('user not found');
        return done(null, false);
      }


      const usersAvail = {
        id: users.id,
        userName: users.userName,
        email: users.email
      };

      //dia akan meneruskan masuk ke req.user
      return done(null, usersAvail);
    
    } catch (error) {
      console.log(error);
      return done(null, false);
    }
  }
));

module.exports = passport; // Pastikan passport diekspor dengan benar
