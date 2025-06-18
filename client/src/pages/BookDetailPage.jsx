import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch book and its reviews
  useEffect(() => {
    async function fetchData() {
      try {
        const bookRes = await API.get(`/books/${id}`);
        setBook(bookRes.data);

        const reviewsRes = await API.get(`/reviews?bookId=${id}`);
        setReviews(reviewsRes.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/reviews', {
        bookId: id,
        rating,
        comment
      });
      // After submit: refresh reviews
      const updatedReviews = await API.get(`/reviews?bookId=${id}`);
      setReviews(updatedReviews.data);
      setRating(5);
      setComment('');
      alert('Review added!');
    } catch (err) {
      console.error(err);
      alert('Error submitting review.');
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!book) return <p className="text-center text-lg">Book not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Cover Image Banner */}
      <img
        src={book.coverUrl || 'https://via.placeholder.com/400x200'}
        alt={book.title}
        className="w-full max-w-xs h-72 object-cover mb-4 rounded-lg mx-auto"
      />

      {/* Book Info */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-4"><strong>Author:</strong> {book.author}</p>
        <p className="text-gray-600">{book.description}</p>
      </div>

      {/* Add Review Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border rounded px-3 py-2 w-full focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border rounded px-3 py-2 w-full focus:ring focus:border-blue-500"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        {reviews.length === 0 && <p className="text-gray-600">No reviews yet. Be the first!</p>}
        <ul className="space-y-4">
          {reviews.map((rev) => (
            <li key={rev._id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-2">⭐ {rev.rating}/5</span>
              </div>
              <p className="text-gray-700">{rev.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
