# ✦ Blogpost — MERN & Firebase

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
</p>

<p align="center">
  A personal blog and portfolio platform built to share ideas, showcase projects, and explore creativity through technology.
</p>

<p align="center">
  <a href="https://blogpost-mern-firebase.vercel.app/">Live Website</a> ·
  <a href="https://blogpost-mern-firebase.onrender.com">Backend API</a>
</p>

---

## ✧ About the Project

**Blogpost** is a full-stack blog portfolio application built using the MERN stack and Firebase Authentication.

It brings together a personal portfolio and a blogging platform, allowing visitors to explore projects, read stories, and interact with blog posts.

The interface follows a minimal editorial aesthetic with warm neutrals, earthy tones, and a clean responsive layout.

## ✧ Features

- Google Authentication using Firebase.
- Persistent login sessions.
- Admin-only blog creation, editing, and deletion.
- Public blog viewing.
- Like functionality for blog posts.
- MongoDB database integration.
- Responsive portfolio interface.
- Protected backend routes using Firebase ID token verification.

## ✧ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend |
| Tailwind CSS | Styling |
| Node.js | Runtime |
| Express.js | Backend API |
| MongoDB Atlas | Database |
| Mongoose | Database modelling |
| Firebase Authentication | Google sign-in |
| Firebase Admin SDK | Backend authentication verification |
| Axios | API requests |
| Vercel | Frontend hosting |
| Render | Backend hosting |

## ✧ Project Structure

```text
Blogpost-MERN-Firebase/
│
├── blog-project-starter-frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── common/
│       │   ├── Home.jsx
│       │   ├── Blogs.jsx
│       │   ├── Login.jsx
│       │   └── Signup.jsx
│       ├── AuthContext.js
│       ├── firebase.js
│       └── App.js
│
├── blog-project-starter-backend/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## ✧ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Hrishirajeev/Blogpost-MERN-Firebase.git

cd Blogpost-MERN-Firebase
```

### 2. Install backend dependencies

```bash
cd blog-project-starter-backend
npm install
```

### 3. Configure backend environment variables

Create a `.env` file inside the backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
FIREBASE_SERVICE_ACCOUNT=your_firebase_service_account_json
```

The Firebase service account value must contain the complete JSON credentials.

### 4. Start the backend

```bash
node index.js
```

The backend runs locally on:

```text
http://localhost:5000
```

### 5. Install frontend dependencies

Open another terminal:

```bash
cd blog-project-starter-frontend
npm install
```

Configure your Firebase web application credentials in the frontend Firebase configuration file.

### 6. Start the frontend

```bash
npm start
```

The frontend runs locally on:

```text
http://localhost:3000
```

## ✧ Authentication & Access

| User Type | Permissions |
|---|---|
| Admin | Create, edit, delete, view and like blogs |
| Public User | Sign in, view and like blogs |

Admin access is restricted using the configured admin email and verified Firebase ID tokens on the backend.

## ✧ Deployment

| Service | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Authentication | Firebase |

- **Live Website:** https://blogpost-mern-firebase.vercel.app/
- **Backend:** https://blogpost-mern-firebase.onrender.com

## ✧ Security Notes

- Never commit `.env` files.
- Never upload Firebase service account private keys.
- Keep database credentials private.
- Configure environment variables in your hosting platform.
- Restrict administrative operations through backend authentication checks.

## ✧ A Little Note

Built with curiosity, creativity, and a love for learning.

<p align="center">
  <strong>Ideas become experiences.</strong>
  <br/>
  <em>Designed & developed by Hrishirajeev.</em>
</p>

---

<p align="center">
  ✦ Thanks for visiting this project! ✦
</p>
