import { Strategy as LocalStrategy } from 'passport-local';

export default (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  }, (username, password, done) => {
    if (username === 'username' && password === 'password') {
      done(null, { username, log: 'Successfully logged in.' });
    } else {
      done(null);
    }
  }));
};
