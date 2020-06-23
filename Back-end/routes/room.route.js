const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL ROOMS http://localhost:5000/rooms

router.get('/', (req, res) => {

    connection.query('SELECT r.id, r.name, r.capacity, t.type  FROM room r JOIN room_type t ON r.room_type_id=t.id', (err, results) => {
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

  return connection.query('INSERT INTO room SET ?' , [formData], (err, results) => {
      if(err) {
          return res.status(500).json({
              error: err.message,
              sql: err.sql,
          });
      }
      return connection.query('SELECT * FROM room WHERE id = ?', results.insertId, (err2, records) => {
          if(err2){
              return res.status(500).json({
                  error: err2.message,
                  sql: err2.sql,
              });
          }
          const InsertedRoom = records[0];
          return res.status(201)
          .json(InsertedRoom)
      });
  });
});


module.exports = router;