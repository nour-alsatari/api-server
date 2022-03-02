"use strict";

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: "sorry there's an error this is error handler",
    error: error
  });
}


module.exports = {errorHandler }