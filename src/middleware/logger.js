"use strict";

function logger(req, res, next) {
  console.log("this is logger");
  next();
}


module.exports = {logger};