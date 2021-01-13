const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

const cookieExtrator = req => {
    let token = null;
    if(req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

// authorisationn
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtrator,
    secretOrKey : "Jalato"
}, (payload, done) => {
    User.findById({_id: payload.sub}, (err, user) => {
        if(err)
            return done(err, false);
        if(user)
            return done(null, user);
        else
            return done(null, false);
    });
}));

// authentication local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err,user) => {
        // something went wrong with Db
        if(err)
            return done(err);
        // if no user exist
        if(!user)
            return done(null, false);
        // check if password is correct
        user.comparePassword(password, done);
    });
}));