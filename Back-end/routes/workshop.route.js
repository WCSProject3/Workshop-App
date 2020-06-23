const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL WORKSHOPS http://localhost:5000/workshops

router.get('/', (req, res) => {

    connection.query('SELECT * FROM workshops', (err, results) => {
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

router.get('/:id', (req, res) => {

  const workshopId = req.params.id;

  console.log('workshopId')

  connection.query('SELECT * FROM workshops WHERE id=?', [workshopId], (err, results) => {
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

router.get('/:id/attendees', (req, res) => {

  const workshopId = req.params.id;

  //query to adapt from user_workshops with JOIN user & workshops tables

  connection.query('SELECT * FROM user WHERE role_id=?', [workshopId], (err, results) => {
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