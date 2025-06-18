import { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/books?page=1&limit=10')
      .then(res => {
        setBooks(res.data.books);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-20 text-xl">Loading books...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-indigo-800">
        📚 Explore Books
      </h1>
      {books.length === 0 ? (
        <p className="text-center text-gray-600">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {books.map((book, index) => (
            <motion.div
              key={book._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/books/${book._id}`}
                className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white"
              >
                <div className="h-60 bg-gray-200 overflow-hidden">
                  <img
                    src={book.coverUrl || 'https://via.placeholder.com/300x400?text=No+Cover'}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors mb-1">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-500">by {book.author}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
