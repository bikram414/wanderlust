const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Review = sequelize.define('Review', {
  comment: DataTypes.TEXT,
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'reviews'
});

module.exports = Review;