require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const connection = require("./config.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("You are connected to the database successfully");
  }
});

app.get("/wizard", (req, res) => {
  connection.query("SELECT * FROM wizard", (err, results) => {
    if (err) {
      res.status(500).send("There was an error retreiving the Wizard");
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The app is running at ${port}`);
  }
});
