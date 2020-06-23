const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL ROOMS http://localhost:5000/rooms

router.get('/', (req, res) => {

    connection.query('SELECT * FROM room', (err, results) => {
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