const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// todo
// const articlesRoutes = require('./routes/articles');

const app = express();

mongoose
  .connect(
    "mongodb+srv://<yourdbuser>:<yourpassword>@cluster0-w014b.mongodb.net/<yourdatabase>?retryWrites=true",

    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// todo
// app.use('/api/articles', articlesRoutes);

module.exports = app;
