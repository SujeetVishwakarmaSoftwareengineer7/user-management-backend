# User Management Backend

A backend project built using Node.js, Express.js, MongoDB, and Mongoose, following a modular MVC architecture.

## Features

- Create new users
- Retrieve all users in JSON format
- Display users in HTML format
- Fetch individual users by ID
- Update user details
- Delete users
- Mongoose schema validation
- Centralized error handling
- Environment variable configuration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

## Project Structure

```text
project-01/
├── config/
│   └── db.js
├── models/
│   └── user.model.js
├── controllers/
│   └── user.controller.js
├── routes/
│   └── user.routes.js
├── middlewares/
│   └── error.middleware.js
├── app.js
├── index.js
├── .env
├── .gitignore
└── package.json
```

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

4. Start the development server:

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Display users in HTML |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create a user |
| PATCH | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

## Learning Objectives

This project helped me understand backend development fundamentals, REST API design, MVC architecture, database integration, and Express middleware.

## Future Improvements

- User authentication
- JWT authorization
- Password hashing
- Input validation
- Role-based access control

## Author

Sujeet Vishwakarma
