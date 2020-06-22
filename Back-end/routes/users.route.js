const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL USERS http://localhost:5000/users

router.get('/', (req, res) => {

    connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.status(500).json({
              error: err.message,
              sql: err.sql,
            });
          } else {
            res.json(results);
          }
    })
});


//GET ALL SPEAKERS http://localhost:5000/users/speakers

router.get('/speakers', (req, res) => {

    connection.query('SELECT * FROM user WHERE role_id = 2', (err, results) => {
        if (err) {
            res.status(500).json({
              error: err.message,
              sql: err.sql,
            });
          } else {
            res.json(results);
          }
    })
});


//GET ALL ATTENDEES http://localhost:5000/users/attendees

router.get('/attendees', (req, res) => {

    connection.query('SELECT * FROM user WHERE role_id = 3', (err, results) => {
        if (err) {
            res.status(500).json({
              error: err.message,
              sql: err.sql,
            });
          } else {
            res.json(results);
          }
    })
});


module.exports = router;