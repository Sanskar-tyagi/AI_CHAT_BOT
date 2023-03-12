const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const cors = require("cors");
require("dotenv").config;
const { mongoURI } = require("./config/dev");
const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

var allowedOrigins = ["*", "localhost:3000"];
app.use(function (req, res, next) {
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("X-Frame-Options", "allow");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
const router = require("./Routes/Routes");
app.use("/", router);

// req --> frontend ans
// server start
app.listen(8080, () => {
  console.log("HOgy!!");
});
