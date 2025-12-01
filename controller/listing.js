const { Listing, Review, User } = require("../models/associations");

module.exports.index = async (req, res) => {
  console.log('=== 🔍 ULTRA DEBUG: Checking ALL database data ===');
  console.log('Time:', new Date().toISOString());
  
  try {
    // 1. Get ALL listings with ALL fields
    const alllistings = await Listing.findAll({
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'username']
        }
      ]
    });
    
    console.log(`=== 📊 TOTAL LISTINGS FOUND: ${alllistings.length} ===`);
    
    if (alllistings.length === 0) {
      console.log('❌ NO LISTINGS IN DATABASE!');
    } else {
      // 2. Log EVERY field of EVERY listing
      alllistings.forEach((listing, i) => {
        console.log(`\n=== 🏠 LISTING ${i + 1}/${alllistings.length} ===`);
        console.log('📌 ID:', listing.id);
        console.log('🏷️ Title:', listing.title);
        console.log('📝 Description:', listing.description);
        console.log('📍 Location:', listing.location);
        console.log('🇺🇸 Country:', listing.country);
        console.log('💰 Price:', listing.price);
        console.log('👤 Owner:', listing.owner?.username);
        console.log('🖼️ Image URL:', listing.image?.url);
        console.log('📅 Created:', listing.createdAt);
        
        // Check for the mysterious text
        const fullText = JSON.stringify(listing.toJSON()).toLowerCase();
        if (fullText.includes('search') || fullText.includes('option') || fullText.includes('session')) {
          console.log('🚨🚨🚨 FOUND SUSPICIOUS TEXT IN THIS LISTING! 🚨🚨🚨');
          console.log('Full data:', JSON.stringify(listing.toJSON(), null, 2));
        }
      });
    }
    
    // 3. Also check users table
    const allUsers = await User.findAll();
    console.log(`\n=== 👥 TOTAL USERS: ${allUsers.length} ===`);
    allUsers.forEach(user => {
      console.log(`User: ${user.username} (${user.email})`);
    });
    
    console.log('\n=== 🎬 RENDERING TEMPLATE ===');
    res.render("listings/index.ejs", { alllistings });
    
  } catch (error) {
    console.log('❌ DATABASE ERROR:', error);
    res.status(500).send('Database error: ' + error.message);
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findByPk(id, {
    include: [
      {
        model: Review,
        as: 'reviews',
        include: [{
          model: User,
          as: 'author',
          attributes: ['id', 'username']
        }]
      },
      {
        model: User,
        as: 'owner',
        attributes: ['id', 'username']
      }
    ]
  });
  
  if (!listing) {
    req.flash("error", "The Listing you are trying to access for is deleted");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  
  const newListing = await Listing.create({
    ...req.body.listing,
    ownerId: req.user.id, // Use ownerId instead of owner
    image: { url, filename }
  });
  
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findByPk(id);
  
  if (!listing) {
    req.flash("error", "The Listing you are trying to access for is deleted");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    await Listing.update(
      { 
        ...req.body.listing,
        image: { url, filename }
      },
      { where: { id } }
    );
  } else {
    await Listing.update(
      { ...req.body.listing },
      { where: { id } }
    );
  }
  
  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  
  // Sequelize will automatically delete associated reviews due to cascade
  await Listing.destroy({ where: { id } });
  
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};