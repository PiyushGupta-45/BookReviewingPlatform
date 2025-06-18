# 📚 Book Review Platform

A complete full-stack Book Review Platform where users can:
- Browse books with pagination
- View detailed book info
- Read & write reviews
- View and update a basic user profile

This project is designed for full-stack developer assignments and showcases clean REST API, responsive frontend, and MongoDB Atlas integration.

---

## ✨ Features

✅ Modern responsive UI with Tailwind CSS  
✅ Smooth page animations (Framer Motion)  
✅ RESTful API (Node.js + Express)  
✅ MongoDB Atlas with Mongoose  
✅ Books listing with pagination  
✅ Book detail page with live reviews  
✅ Add Review form with instant update  
✅ Admin-only endpoint to add books

---

## 🚀 Tech Stack

| Layer | Technology |
| ----- | ----------- |
| **Frontend** | React (Vite), React Router, Axios, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express |
| **Database** | MongoDB Atlas (via Mongoose)

---

## 📂 Project Structure

```
book-review-platform/
 ├── client/   # Frontend (React + Vite)
 ├── server/   # Backend (Node.js + Express + MongoDB)
 ├── README.md # This file!
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/PiyushGupta-45/BookReviewingPlatform.git
cd book-review-platform
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` in `server/`:

```
MONGODB_URI=YOUR_MONGODB_ATLAS_URI
```

Run backend:

```bash
npm run dev
```

Backend runs at **http://localhost:5000**

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

Frontend runs at **http://localhost:5173**

---

## ✅ REST API Endpoints

| Method | Endpoint | Description |
|--------|-----------|--------------|
| GET | `/books` | Get all books (supports `?page` & `?limit`) |
| GET | `/books/:id` | Get specific book |
| POST | `/books` | Add new book (admin only, requires `admin: true` header) |
| GET | `/reviews?bookId=` | Get reviews for a book |
| POST | `/reviews` | Submit a new review |

---

## 🙌 Author

**Piyush Gupta** — B.Tech CSE | Full Stack Developer

---

**Happy reading & reviewing! 📚✨**
