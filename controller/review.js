const { Listing, Review, User } = require("../models/associations");

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findByPk(req.params.id);
  
  const newReview = await Review.create({
    ...req.body.review,
    authorId: req.user.id, // Use authorId instead of author
    listingId: listing.id   // Use listingId instead of pushing to array
  });
  
  req.flash("success", "New Review Created");
  res.redirect(`/listings/${listing.id}`);
};

module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  
  await Review.destroy({ where: { id: reviewId } });
  
  req.flash("success", "Review Deleted");
  res.redirect(`/listings/${id}`);
};