const User = require('./user.js');
const Listing = require('./listing.js');
const Review = require('./review.js');

// Define associations with cascading deletes
User.hasMany(Listing, { 
  foreignKey: 'ownerId', 
  as: 'listings',
  onDelete: 'CASCADE' // When user is deleted, their listings are deleted
});
Listing.belongsTo(User, { 
  foreignKey: 'ownerId', 
  as: 'owner' 
});

User.hasMany(Review, { 
  foreignKey: 'authorId', 
  as: 'reviews',
  onDelete: 'CASCADE' // When user is deleted, their reviews are deleted
});
Review.belongsTo(User, { 
  foreignKey: 'authorId', 
  as: 'author' 
});

Listing.hasMany(Review, { 
  foreignKey: 'listingId', 
  as: 'reviews',
  onDelete: 'CASCADE' // When listing is deleted, its reviews are deleted
});
Review.belongsTo(Listing, { 
  foreignKey: 'listingId', 
  as: 'listing' 
});

module.exports = { User, Listing, Review };