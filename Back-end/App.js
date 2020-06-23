require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const connection = require("./config.js");

const notificationRouter = require('./routes/notifications.route');
const roomRouter = require('./routes/room.route');
const userRouter = require('./routes/users.route');
const workshopRouter = require('./routes/workshop.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("You are connected to the database successfully");
  }
});

app.use('/notifications', notificationRouter);
app.use('/rooms', roomRouter);
app.use('/users', userRouter);
app.use('/workshops', workshopRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The app is running at ${port}`);
  }
});
