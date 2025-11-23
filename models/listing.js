const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Listing = sequelize.define('Listing', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  image: {
    type: DataTypes.JSON,
    defaultValue: {
      url: '',
      filename: ''
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  location: DataTypes.STRING,
  country: DataTypes.STRING
}, {
  tableName: 'listings'
});

module.exports = Listing;