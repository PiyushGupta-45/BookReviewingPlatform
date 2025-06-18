import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <nav className="bg-blue-600 p-4 text-white flex gap-6">
        <Link className="font-bold hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/books">Books</Link>
        <Link className="hover:underline" to="/profile">Profile</Link>
      </nav>
      <div className="p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
