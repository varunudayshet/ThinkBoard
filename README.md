# 🧠 ThinkBoard
### A Modern, Full-Stack MERN Note-Taking Application

**ThinkBoard** is a modern, responsive note-taking app built with the **MERN (MongoDB, Express.js, React, Node.js)** stack. It enables users to **capture, edit, and organize their notes seamlessly** across devices, offering a beautiful and distraction-free writing experience.

---

## 📘 Project Overview

ThinkBoard was created to solve a simple problem — having an elegant, minimal, and powerful space to record thoughts, study notes, and ideas.

The app focuses on:
- Simplicity — minimal UI for fast note-taking
- Accessibility — works across devices
- Real-time updates — seamless edits and changes
- Persistence — all notes stored securely in MongoDB

---

## ✨ Core Features

- 📝 **Create, Edit, Delete Notes** — Instant CRUD operations with live state updates
- 🕒 **Timestamps** — Automatically record creation and modification times
- 💾 **Persistent Storage** — Data stored safely using MongoDB
- 📱 **Responsive UI** — Works flawlessly on desktops, tablets, and mobiles
- 🌗 **Modern Design** — Built with Tailwind CSS + DaisyUI
- 🔒 **User Authentication (JWT)** — Optional login for personalized notes
- 🔍 **Search & Filter** — Quickly find your notes

---

## 🧠 Technology Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | React.js, Tailwind CSS, DaisyUI | Interactive UI & design |
| **Backend** | Node.js, Express.js | API handling & server logic |
| **Database** | MongoDB (Mongoose ODM) | Data storage & management |
| **Auth** | JWT (JSON Web Token) | Secure user authentication |

---

## 🏗️ System Architecture

```
Client (React)  ⇄  REST API (Express.js)  ⇄  MongoDB Database
```

- **Frontend** communicates via Axios to RESTful routes  
- **Backend** handles CRUD requests and authentication  
- **MongoDB** stores user data and notes collections  

---

## 📂 Project Structure

```
ThinkBoard/
 ├── client/              # React Frontend
 │   ├── src/
 │   │   ├── components/  # UI components (NoteCard, Navbar, etc.)
 │   │   ├── pages/       # Home, Login, Dashboard
 │   │   └── utils/       # Helper functions
 │   └── package.json
 ├── server/              # Express Backend
 │   ├── models/          # Mongoose schemas
 │   ├── routes/          # API routes
 │   ├── controllers/     # Request handlers
 │   └── server.js
 └── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/thinkboard.git
cd thinkboard

# Install dependencies
npm install

# Start backend
cd server
npm run dev

# Start frontend
cd client
npm start
```

---

## 🔧 Environment Configuration

Create a `.env` file inside `/server` with the following variables:

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

---

## 🧾 API Overview

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/api/notes` | Get all notes |
| **POST** | `/api/notes` | Create a new note |
| **PUT** | `/api/notes/:id` | Update an existing note |
| **DELETE** | `/api/notes/:id` | Delete a note |
| **POST** | `/api/auth/login` | User login |
| **POST** | `/api/auth/register` | Create new user |

---

## 🧱 Database Schema

### `Note` Collection
```js
{
  title: String,
  content: String,
  userId: String,
  createdAt: Date,
  updatedAt: Date
}
```

### `User` Collection
```js
{
  name: String,
  email: String,
  password: String,
  createdAt: Date
}
```

---

## 🧭 Usage Guide

1. Register or log in to your account (optional).  
2. Create new notes using the **Add Note** button.  
3. Edit or delete notes anytime — changes are synced instantly.  
4. View notes by date or search by keyword.  

---

## 🚀 Deployment

You can deploy the app on:
- **Frontend:** Vercel / Netlify
- **Backend:** Render / Railway / Cyclic
- **Database:** MongoDB Atlas

---

## 🧪 Testing

- **Frontend Testing:** React Testing Library
- **Backend Testing:** Postman for API validation
- **Error Handling:** Graceful fallbacks for failed requests

---

## 🌱 Future Enhancements

- 📂 Note folders & tags  
- ☁️ Cloud sync & offline mode  
- 🧠 AI-based summarization of notes  
- 📎 File attachments and media support  
- 🔔 Reminders & notifications

---



