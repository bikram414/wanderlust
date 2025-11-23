const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './wanderlust.sqlite',
  logging: false
});

module.exports = sequelize;