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




module.exports = router;