const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET /reviews?bookId=...
router.get('/', async (req, res) => {
  try {
    const bookId = req.query.bookId;
    if (!bookId) {
      return res.status(400).json({ error: 'Missing bookId query parameter' });
    }
    const reviews = await Review.find({ bookId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /reviews
router.post('/', async (req, res) => {
  const review = new Review(req.body);
  try {
    const saved = await review.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
