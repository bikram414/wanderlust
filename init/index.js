const { Listing, User } = require("../models/associations");
const initData = require("./data.js");

const initDB = async () => {
  try {
    // First, create or find a user to be the owner
    let user = await User.findOne({ where: { username: 'admin' } });
    if (!user) {
      user = await User.create({
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123'
      });
      console.log('Admin user created');
    }

    // Clear existing listings
    await Listing.destroy({ where: {} });

    // Add sample listings with the user as owner
    const listingsWithOwner = initData.data.map(listing => ({
      ...listing,
      ownerId: user.id // Use ownerId instead of owner
    }));

    await Listing.bulkCreate(listingsWithOwner);
    console.log("Data was initialized with SQLite!");
  } catch (error) {
    console.log("Initialization error:", error);
  }
};

// Only run if this file is executed directly
if (require.main === module) {
  const sequelize = require("../config/database.js");
  sequelize.authenticate()
    .then(() => initDB())
    .then(() => {
      console.log('Seeding completed!');
      process.exit(0);
    })
    .catch(err => {
      console.error('Seeding failed:', err);
      process.exit(1);
    });
}

module.exports = initDB;