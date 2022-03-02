"use strict";

const express = require("express");
const app = express();

const handleNotFound = require("./error-handlers/404");
const { errorHandler } = require("./error-handlers/500");
const { logger } = require("./middleware/logger");
const { validator } = require("./middleware/validator");
const foodRoute = require("./routes/food.js");
const clothesRoute = require("./routes/clothes");

app.use(express.json()); // to parse the body of put and post
app.use(logger);
app.use(foodRoute);
app.use(clothesRoute);

app.get("/", (req, res) => {
  res.send("I'm live");
});

app.get("/person", validator, (req, res) => {
  res.json({
    name: req.query.name,
  });
});

app.use(errorHandler);
app.use("*", handleNotFound.handleNotFound);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT} `);
  });
}

module.exports = {
  app,
  start,
};
