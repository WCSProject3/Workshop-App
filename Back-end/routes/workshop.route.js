const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL WORKSHOPS http://localhost:5000/workshops

router.get('/', (req, res) => {

    connection.query('SELECT w.id, w.title, w.date, w.starting_hour, w.ending_hour, MONTHNAME(w.date) AS workshop_month, w.description, w.room, w.room_manager, w.room_capacity, t.type AS room_type, CONCAT(u.firstname, " ", u.lastname) AS workshop_speaker, w.status_open FROM workshops w JOIN room_type t ON w.room_type_id = t.id JOIN user u ON w.speaker_id = u.id', (err, results) => {
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

router.get('/months', (req, res) => {

    connection.query('SELECT DISTINCT MONTHNAME(date) AS months FROM workshops ORDER BY months DESC', (err, results) => {
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

  connection.query('SELECT u.firstname, u.lastname, u.email, u.position, u.company, u.country FROM user u JOIN user_workshops u_w ON u_w.user_id = u.id JOIN workshops w ON u_w.workshop_id = w.id where w.id = ?', [workshopId], (err, results) => {
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

router.put('/:id', (req, res) => {

  const formData = req.body;
  const idWorkshop = req.params.id;

  return connection.query('UPDATE workshops SET ? WHERE id = ?', [formData, idWorkshop], (err, results) => {
      if(err) {
        console.log(err)
          return res.status(500).json({
              error: err.message,
              sql: err.sql,
          });
      } 
console.log('res', results)
        res.status(200).send(results);  
  });
});


module.exports = router;