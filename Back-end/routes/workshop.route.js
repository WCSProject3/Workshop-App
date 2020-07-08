const express = require('express');
const router = express.Router();
const connection = require('../config');

//GET ALL WORKSHOPS http://localhost:5000/workshops

router.get('/', (req, res) => {
  connection.query(
    'SELECT w.*, MONTHNAME(w.date) AS workshop_month, CONCAT(u.firstname, " ", u.lastname) AS workshop_speaker, COUNT(u_w.workshop_id) as enrolled_attendees FROM workshops w JOIN user u ON w.speaker_id = u.id left join user_workshops u_w on w.id=u_w.workshop_id group by w.id;',
    (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        res.json(results);
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  const workshop_id = req.params.id;

  connection.query(
    'DELETE FROM workshops WHERE id = ?',
    [workshop_id],
    (err, results) => {
      if (err) {
        console.log('delete err', err);
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      console.log('nice');
      res.status(201).json(results);
    }
  );
});

router.delete('/speaker/:id', (req, res) => {
  const workshop_id = req.params.id;

  console.log('hereeee');

  connection.query(
    'DELETE FROM workshops WHERE speaker_id = ?',
    [workshop_id],
    (err, results) => {
      if (err) {
        console.log('delete err', err);
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      console.log('nice');
      res.status(201).json(results);
    }
  );
});

router.delete('/workshop-user-workshops/:id', (req, res) => {
  const workshop_id = req.params.id;

  console.log(workshop_id);

  connection.query(
    'DELETE FROM user_workshops WHERE workshop_id = ?',
    [workshop_id],
    (err, results) => {
      if (err) {
        console.log('delete err', err);
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      console.log('nice');
      res.status(201).json(results);
    }
  );
});

router.delete('/all-speaker-workshops/:id', (req, res) => {
  const speaker_id = req.params.id;

  console.log('hereee', speaker_id);

  connection.query(
    'DELETE FROM user_workshops WHERE speaker_id = ?',
    [speaker_id],
    (err, results) => {
      if (err) {
        console.log('delete err', err);
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      console.log('nice');
      res.status(201).json(results);
    }
  );
});

router.get('/months', (req, res) => {
  connection.query(
    'SELECT DISTINCT MONTHNAME(date) AS month FROM workshops ORDER BY month DESC',
    (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        res.json(results);
      }
    }
  );
});

router.get('/:id', (req, res) => {
  const workshopId = req.params.id;

  connection.query(
    'SELECT w.*, MONTHNAME(w.date) AS workshop_month, CONCAT(u.firstname," ",u.lastname) AS workshop_speaker FROM workshops w JOIN user u ON w.speaker_id = u.id WHERE w.id = ?',
    [workshopId],
    (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        res.json(results);
      }
    }
  );
});

router.get('/user-workshops/:id', (req, res) => {
  const userId = req.params.id;

  connection.query(
    'SELECT * FROM user_workshops WHERE user_id=?',
    [userId],
    (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        res.json(results);
      }
    }
  );
});

router.post('/user-workshops', (req, res) => {
  const formData = req.body;

  const { user_id } = formData;

  return connection.query(
    'INSERT INTO user_workshops SET ?',
    [formData],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      return connection.query(
        'SELECT * FROM user_workshops WHERE user_id = ?',
        [user_id],
        (err2, records) => {
          if (err2) {
            console.log(err2);
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql,
            });
          }
          const UserWorkshops = records;
          return res.status(201).json(UserWorkshops);
        }
      );
    }
  );
});

router.delete('/all-user-workshops/:id', (req, res) => {
  const userId = req.params.id;

  console.log('delete userWorkshops');

  connection.query(
    'DELETE FROM user_workshops WHERE user_id=?',
    [userId],
    (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        res.json(results);
      }
    }
  );
});

router.delete('/user-workshops', (req, res) => {
  const formData = req.body;

  console.log(formData);

  const workshop_id = formData[0];
  const user_id = formData[1];

  connection.query(
    'DELETE FROM user_workshops WHERE workshop_id = ? AND user_id = ?',
    [workshop_id, user_id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      if (results.affectedRows === 0) {
        console.log('not found');

        return res.status(404).json({ msg: 'user does not exist' });
      }
      return connection.query(
        'SELECT * FROM user_workshops WHERE user_id = ?',
        user_id,
        (err2, records) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql,
            });
          }
          const UserWorkshops = records;
          return res.status(201).json(UserWorkshops);
        }
      );
    }
  );
});

router.get('/:id/attendees', (req, res) => {
  const workshopId = req.params.id;

  //query to adapt from user_workshops with JOIN user & workshops tables

  connection.query(
    'SELECT u.firstname, u.lastname, u.email, u.position, u.company, u.country FROM user u JOIN user_workshops u_w ON u_w.user_id = u.id JOIN workshops w ON u_w.workshop_id = w.id where w.id = ?',
    [workshopId],
    (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        res.json(results);
      }
    }
  );
});

router.post('/', (req, res) => {
  const formData = req.body;

  console.log(formData);

  return connection.query(
    'INSERT INTO workshops SET ?',
    [formData],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      return connection.query(
        'SELECT * FROM workshops WHERE id = ?',
        results.insertId,
        (err2, records) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql,
            });
          }
          const InsertedWorkshop = records[0];
          return res.status(201).json(InsertedWorkshop);
        }
      );
    }
  );
});

router.put('/:id', (req, res) => {
  const formData = req.body;
  const idWorkshop = req.params.id;

  return connection.query(
    'UPDATE workshops SET ? WHERE id = ?',
    [formData, idWorkshop],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }
      console.log('res', results);
      res.status(200).send(results);
    }
  );
});

module.exports = router;
