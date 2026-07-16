# User Management System

A simple CRUD-based User Management System built using **Node.js**, **Express.js**, **EJS**, and **MySQL**. This project demonstrates how to connect a Node.js application with a MySQL database, retrieve user data, and update user information after password verification.

## Features

- Display total number of users
- View all registered users
- Edit username
- Password verification before updating user information
- MySQL database integration
- Server-side rendering using EJS
- Method Override for handling PATCH requests

## Tech Stack

- Node.js
- Express.js
- MySQL
- EJS
- HTML
- CSS
- Method-Override

## Project Structure

```
project/
│
├── views/
│   ├── home.ejs
│   ├── userinfo.ejs
│   └── edit.ejs
│
├── public/
│   ├── style.css
│   └── edit.css
│
├── index.js
├── package.json
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/user-management-system.git
```

### 2. Navigate to the project

```bash
cd user-management-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create the MySQL database

```sql
CREATE DATABASE first;

USE first;

CREATE TABLE users(
    id VARCHAR(255) PRIMARY KEY,
    userid VARCHAR(255),
    email VARCHAR(255),
    passwordd VARCHAR(255)
);
```

You can insert your own records or use the Faker.js code provided in the project to generate sample users.

### 5. Update database credentials

Open **index.js** and change the MySQL configuration:

```javascript
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "first"
});
```

### 6. Start the server

```bash
node index.js
```

or

```bash
nodemon index.js
```

Visit:

```
http://localhost:3000
```

## Routes

| Method | Route | Description |
|---------|------|-------------|
| GET | `/` | Display total users |
| GET | `/users` | View all users |
| GET | `/users/:id/edit` | Open edit page |
| PATCH | `/user/:id` | Update username after password verification |

## Learning Outcomes

This project helped me understand:

- Express routing
- Connecting Node.js with MySQL
- Executing SQL queries from Express
- Rendering dynamic pages using EJS
- CRUD operations
- Method Override
- Handling forms
- Password validation before updating database records
- Organizing an Express project

## Future Improvements

- Add user registration
- Delete users
- Login & Authentication
- Password hashing using bcrypt
- Session management
- Input validation
- Better UI design
- REST API version
- Deploy the application online

---

This project was built as part of my backend learning journey using Node.js, Express.js, EJS, and MySQL.
