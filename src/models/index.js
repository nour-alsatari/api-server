const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");
dotenv.config();

const clothes = require("./clothes");
const food = require("./food");


//prepare the connection
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions); // Example for postgres

// const client = new pg.Client(DATABASE_URL); // this used to connect the database

module.exports = {
  db: sequelize, // i need it for connection and will use it in index.js
  clothes: clothes(sequelize, DataTypes), // for creating new tables and will use it in our routes
  food: food(sequelize, DataTypes) // for creating new tables and will use it in our routes
};
