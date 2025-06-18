/**
 * seed.js
 * Seed your MongoDB Atlas with example books
 */

const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config(); // ✅ Load .env

// ✅ 1) Get URI from .env
const mongoUri = process.env.MONGODB_URI;

// ✅ 2) Example books
const books = [
  {
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    description: "Mr Fox is a clever fox who outwits the farmers Boggis, Bunce and Bean.",
    coverUrl: "https://covers.openlibrary.org/b/id/6498519-L.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "Harry discovers he's a wizard and attends Hogwarts School of Witchcraft and Wizardry.",
    coverUrl: "https://covers.openlibrary.org/b/id/8232001-L.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Baggins joins a group of dwarves on an adventure to reclaim their homeland from a dragon.",
    coverUrl: "https://covers.openlibrary.org/b/id/6979865-L.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel about the American dream and the mysterious millionaire Jay Gatsby.",
    coverUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
];

// ✅ 3) Connect & seed
mongoose.connect(mongoUri)
  .then(() => {
    console.log('✅ MongoDB connected');
    return Book.deleteMany({});
  })
  .then(() => {
    console.log('✅ Old books removed');
    return Book.insertMany(books);
  })
  .then((insertedBooks) => {
    console.log('✅ Seeding complete:', insertedBooks);
    process.exit();
  })
  .catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
