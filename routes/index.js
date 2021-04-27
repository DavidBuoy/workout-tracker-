const router = require("express").Router();
const path = require("path");

// This is taking us to the routes for the pages.
// http://localhost:3000/exercise
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// http://localhost:3000/stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
