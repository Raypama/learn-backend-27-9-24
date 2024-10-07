const passport = require('../lib/passport');


const checkAuth = passport.authenticate('jwt', { session: false })


module.exports = checkAuth;


//note: sebagai jembatan utuk menjalankan si passport pada folder lib.pasport.js