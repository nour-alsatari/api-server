const server = require("./src/server.js");
const dotenv = require("dotenv");
const { db } = require("./src/models/index");
dotenv.config();

const PORT = process.env.PORT;

db.sync().then(() => {
  server.start(PORT || 5000);
});

//Synchronizing all models at once
//You can use sequelize.sync() to automatically synchronize all models


