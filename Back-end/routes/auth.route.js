const express = require('express');
const router = express.Router();
const connection = require('../config');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const sendNodemailer = require('./../regEmail.js');

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    (email, password, callback) => {
      connection.query(
        `SELECT * FROM user WHERE email = ?`,
        email,
        (err, foundUser) => {
          if (err) return callback(err);
          if (!foundUser || !foundUser.length)
            return callback(null, false, { message: 'Incorrect email.' });
          if (!bcrypt.compareSync(password, foundUser[0].password))
            return callback(null, false, { message: 'Incorrect password.' });
          return callback(null, foundUser[0]);
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'jwtsecret',
    },
    (jwtPayload, cb) => {
      return cb(null, jwtPayload);
    }
  )
);

router.post('/register', (req, res) => {
  const password = req.body.password;
  bcrypt.hash(password, 10, (err, hash) => {
    const {
      email,
      firstname,
      lastname,
      company,
      position,
      country,
      role_id,
    } = req.body;
    const formData = [
      email,
      firstname,
      lastname,
      company,
      position,
      country,
      hash,
      role_id,
    ];

    connection.query(
      'INSERT INTO user (email, firstname, lastname, company, position, country, password, role_id) VALUES (?,?,?,?,?,?,?,?)',
      formData,
      (err, results) => {
        if (err) {
          res.status(500).json({ flash: err.message });
        } else {
          res.status(200).json({ flash: 'User has been registered' });
          sendNodemailer();
        }
      }
    );
  });
});

router.post('/login', function (req, res) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({ message: info.message });
    const token = jwt.sign(JSON.stringify(user), 'jwtsecret');
    return res.json({ user, token });
  })(req, res);
});

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('User can view the profile');
  }
);

module.exports = router;
