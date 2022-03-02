"use strict";

function food(sequelize, DataTypes) {
  return sequelize.define("food", {
    // Model attributes are defined here
    dishName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minutesToPrepare: {
      type: DataTypes.INTEGER,
    },
  });
}


module.exports = food;
