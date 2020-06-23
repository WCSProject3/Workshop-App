const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL WORKSHOPS http://localhost:5000/workshops

router.get('/', (req, res) => {

    connection.query('SELECT w.id, w.title, w.date, w.description, w.room, w.room_manager, w.room_capacity, t.type AS room_type, CONCAT(u.firstname, " ", u.lastname) AS workshop_speaker, w.status_open FROM workshops w JOIN room_type t ON w.room_type_id = t.id JOIN user u ON w.speaker_id = u.id', (err, results) => {
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

router.post('/', (req, res) => {

  const formData = req.body;

  console.log(formData)

  return connection.query('INSERT INTO workshops SET ?' , [formData], (err, results) => {
      if(err) {
          return res.status(500).json({
              error: err.message,
              sql: err.sql,
          });
      }
      return connection.query('SELECT * FROM workshops WHERE id = ?', results.insertId, (err2, records) => {
          if(err2){
              return res.status(500).json({
                  error: err2.message,
                  sql: err2.sql,
              });
          }
          const InsertedWorkshop = records[0];
          return res.status(201)
          .json(InsertedWorkshop)
      });
  });
});


module.exports = router;