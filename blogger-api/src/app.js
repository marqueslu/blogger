const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const articlesRoutes = require("./routes/articles");

const app = express();

mongoose
  .connect(
    "mongodb+srv://<your user>:<your password>@cluster0-w014b.mongodb.net/<your database>",

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

app.use("/api/articles", articlesRoutes);

module.exports = app;
