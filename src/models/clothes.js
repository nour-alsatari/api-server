"use strict";

function clothes(sequelize, DataTypes) {
  return sequelize.define("Clothe", {
    // Model attributes are defined here
    clotheName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clotheSize: {
      type: DataTypes.INTEGER,
    },
  });
}

module.exports = clothes ;
