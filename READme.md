# About Me API Server

A simple API server built to manage personal “About Me” information using full CRUD functionality. This project was created to practice building APIs with Express while using **Supabase** as a hosted PostgreSQL database for persistent storage.

## 📝 Project Description

This API allows you to create, read, update, and delete “About Me” entries—such as hobbies, interests, background information, and more.
It’s a clean learning project focused on improving backend skills, testing routes, and integrating a real database instead of in-memory storage.

## 🚀 Features

- Full CRUD API for “About Me” entries
- Connected to Supabase (PostgreSQL)
- JSON request/response format
- Beginner-friendly, clean structure
- Easy to extend into a full portfolio backend

## 🛠 Tech Stack

- Node.js
- Express
- Supabase (PostgreSQL)
- JavaScript

## 📦 Installation

npm install

## ▶️ Run the Server

npm run dev

## 🔗 Example Routes

| Method | Route          | Description      |
| ------ | -------------- | ---------------- |
| GET    | `/aboutMe`     | Get all entries  |
| GET    | `/aboutMe/:id` | Get single entry |
| POST   | `/aboutMe`     | Create new entry |
| PUT    | `/aboutMe/:id` | Update an entry  |
| DELETE | `/aboutMe/:id` | Remove an entry  |

## 📁 Project Structure

```
project/
├── src/
│   ├── index.js
│   ├── routes/
│   └── database/
├── package.json
└── README.md
```
