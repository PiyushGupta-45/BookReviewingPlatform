import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-indigo-800 via-blue-900 to-black overflow-hidden flex items-center justify-center px-6 py-24">
      {/* Decorative blurred blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[200px] rounded-full"></div>

      {/* Optional: background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1740&q=80')] opacity-10 bg-cover bg-center"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-xl"
        >
          📚 Discover, Read & Share Reviews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          Join our community of book lovers. Explore trending books, write your
          honest reviews, and see what your friends are reading. All in one
          beautiful place.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/books"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            Start Exploring
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
