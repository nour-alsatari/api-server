"use strict";

function validator(req, res, next) {
  if (req.query.name) {
    next();
  } else {
    throw new Error("BROKEN");
  }
}

module.exports = { validator };
