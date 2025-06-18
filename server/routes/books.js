const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books — with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default page 1
    const limit = parseInt(req.query.limit) || 10; // default 10 per page
    const skip = (page - 1) * limit;

    const books = await Book.find().skip(skip).limit(limit);
    const total = await Book.countDocuments();

    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      books
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /books/:id
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /books — Admin only (very basic fake check)
router.post('/', async (req, res) => {
  // Fake admin check — for real apps use JWT/session/auth middleware
  const isAdmin = req.headers.admin === 'true';
  if (!isAdmin) {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }

  const book = new Book(req.body);
  try {
    const saved = await book.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
