const express = require('express');
const router = express.Router();
const connection = require('../config');


//GET ALL USERS http://localhost:5000/users

router.get('/', (req, res) => {

    connection.query('SELECT u.*, r.role, COUNT(u_w.user_id) AS workshop_count FROM user u JOIN role r ON u.role_id=r.id LEFT JOIN user_workshops u_w ON u.id=u_w.user_id GROUP BY u.id', (err, results) => {
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

//GET ONE USER http://localhost:5000/:id


router.get('/getuser/:id', (req, res) => {

  const id = req.params.id

  connection.query('SELECT u.*, r.role FROM user u JOIN role r ON u.role_id=r.id WHERE u.id= ?',[id], (err, results) => {
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

    connection.query('SELECT u.*, r.role, COUNT(u_w.user_id) AS workshop_count FROM user u JOIN role r ON u.role_id=r.id LEFT JOIN user_workshops u_w ON u.id=u_w.user_id  WHERE role_id = 2 GROUP BY u.id', (err, results) => {
        if (err) {
          console.log("not working")
            res.status(500).json({
              error: err.message,
              sql: err.sql,
            });
          } else {
            res.json(results);
          }
    })
});

router.delete('/:id', (req, res) => {

  const id = req.params.id;

  connection.query('DELETE FROM user WHERE id = ?', [id], (err, results) => {
      if(err) {
        console.log(err)
          return res.status(500).json({
                   error: err.message,
                   sql: err.sql,
                  });
      }
      if(results.affectedRows === 0){
        console.log("not found")

        return res
        .status(404)
        .json({msg: 'user does not exist'})
      }
      console.log("succesful")

      return res
      .status(201)
      .json(results)
  })
});


//GET ALL ATTENDEES http://localhost:5000/users/attendees

router.get('/attendees', (req, res) => {

    connection.query('SELECT u.*, r.role, COUNT(u_w.user_id) AS workshop_count FROM user u JOIN role r ON u.role_id=r.id LEFT JOIN user_workshops u_w ON u.id=u_w.user_id  WHERE role_id = 3 GROUP BY u.id', (err, results) => {
        if (err) {
          console.log(err)
            res.status(500).json({
              error: err.message,
              sql: err.sql,
            });
          } else {
            res.json(results);
          }
    })
});

router.get('/attendees/roles', (req, res) => {

  connection.query('SELECT DISTINCT role_id FROM user ORDER BY role_id ASC', (err, results) => {
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