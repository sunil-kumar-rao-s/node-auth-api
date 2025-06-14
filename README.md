# Node.js Auth API

A secure RESTful API built with **Node.js**, **Express**, **MongoDB**, and **JWT** for user authentication. This project demonstrates backend fundamentals like user registration, login, protected routes, and token-based access control.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv

---

## 📁 Features

- ✅ User registration (`/api/auth/register`)
- ✅ User login with hashed passwords
- ✅ JWT-based token authentication
- ✅ Protected route (`/api/auth/profile`)
- ✅ Modular structure (routes, controllers, models)
- ✅ MongoDB connection via Mongoose

---

## 🛠️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/node-auth-api.git

# 2. Navigate into the project
cd node-auth-api

# 3. Install dependencies
npm install

# 4. Create .env file
touch .env
```

## .env Configuration

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/nodeauth
JWT_SECRET=your_secret_key
```

## Running the API
# Start in development mode
```
npm run dev

```
## OR

# Start in production mode
```
node server.js

```

📮 API Endpoints

| Method | Route              | Description         | Access    |
| ------ | ------------------ | ------------------- | --------- |
| POST   | /api/auth/register | Register a new user | Public    |
| POST   | /api/auth/login    | Login & get token   | Public    |
| GET    | /api/auth/profile  | Get user profile    | Protected |

🔐 Example Auth Header
```
Authorization: Bearer <your_token>

```
📬 Contact
Built with ❤️ by Sunil Kumar Rao S



