const { Sequelize, DataTypes } = require('sequelize');

// Crear una instancia de conexión a BD
const sequelize = new Sequelize('deportesdb', 'root', '', {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  });




  module.exports = {
    sequelize,
    DataTypes,
    Sequelize,
  }