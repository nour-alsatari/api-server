const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");
dotenv.config();

const clothes = require("./clothes");
const food = require("./food");
const Collection = require("./collection-class");

//prepare the connection
const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions); // Example for postgres

// const client = new pg.Client(DATABASE_URL); // this used to connect the database


let clothesValue = clothes(sequelize, DataTypes); // createModel/table
let foodValue = food(sequelize, DataTypes); // createModel/table

let clothesModel = new Collection(clothesValue); // create instance
let foodModel = new Collection(foodValue); // create instance

module.exports = {
  db: sequelize, // i need it for connection and will use it in index.js
  clothes: clothesModel, // for creating new tables and will use it in our routes
  food: foodModel // for creating new tables and will use it in our routes
};
