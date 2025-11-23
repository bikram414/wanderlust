const { Listing, Review, User } = require("../models/associations");

module.exports.index = async (req, res) => {
  const alllistings = await Listing.findAll({
    include: [
      {
        model: User,
        as: 'owner',
        attributes: ['id', 'username']
      }
    ]
  });
  res.render("listings/index.ejs", { alllistings });
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