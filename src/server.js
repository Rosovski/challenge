"use strict";
const express = require("express");
const app = express();
const registerRoutes = require("./routes");

// server config
const port = process.env.PORT || 3000;

// register routes
registerRoutes(app);

// serve static files
const path = require("path");
// app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(express.static(path.join(__dirname, "../public")));

// create server start method
const start = () => {
  return new Promise((resolve, reject) => {
    // start the server
    app.listen(port, () => {
      console.log(`Connected to Port ${port}`);
      resolve();
    });
  }).catch((error) => {
    console.log(`failed to start server => ${error.message}`);
  });
};

module.exports = start;
