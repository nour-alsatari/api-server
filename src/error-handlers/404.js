const res = require("express/lib/response");

function handleNotFound(req, res, next) {
  res.status(404).send("ops not found");
}

module.exports = { handleNotFound };
