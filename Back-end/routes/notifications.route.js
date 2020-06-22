const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL NOTIFICATIONS http://localhost:5000/notifications

router.get('/', (req, res) => {

    connection.query('SELECT * FROM notification', (err, results) => {
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