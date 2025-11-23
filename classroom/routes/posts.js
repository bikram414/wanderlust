const express = require("express");
const router = express.Router();
//Index-posts
router.get("/", (req, res) => {
  res.send("Get for posts");
});
//Show-posts
router.get("/:id", (req, res) => {
  res.send("Get for posts id");
});
//Post-posts
router.post("/posts", (req, res) => {
  res.send("Post for posts");
});
//Delete-posts
router.delete("/:id", (req, res) => {
  res.send("Delete for posts id");
});

module.exports = router;