# Support CRM System

A full-stack Customer Support CRM System built using MERN Stack (MongoDB, Express.js, React.js, Node.js). This application allows users to create, manage, search, filter, and update customer support tickets.

## Live Demo

Frontend: https://support-crm-delta.vercel.app/

Backend API: "https://support-crm-gz51.onrender.com/"

---

# Features

* Create Support Tickets
* View All Tickets
* Search Tickets
* Filter Tickets by Status
* Update Ticket Status
* Add Notes to Tickets
* Responsive Modern UI
* MongoDB Database Integration
* REST API Architecture
* Full CRUD Functionality

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Dotenv
* Cors

---

# Folder Structure

```bash
support-crm/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── config/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/support-crm.git
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create .env file

```env
MONGO_URI=your_mongodb_connection_string
```

## Run backend server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Create Ticket

```http
POST /api/tickets
```

## Get All Tickets

```http
GET /api/tickets
```

## Get Single Ticket

```http
GET /api/tickets/:id
```

## Update Ticket

```http
PUT /api/tickets/:id
```

---

# Screenshots

## Home Page

* Displays all tickets
* Search functionality
* Filter by status

## Create Ticket Page

* Create new support tickets

## Ticket Details Page

* Update status
* Add notes/comments

---

# Deployment

## Frontend Deployment

* Vercel

## Backend Deployment

* Render

---

# Future Improvements

* Authentication & Authorization
* Admin Dashboard
* Ticket Priority System
* Email Notifications
* Pagination
* Dark/Light Theme Toggle

---

# Challenges Faced

* Managing frontend and backend connection
* Implementing dynamic search and filters
* Creating responsive UI
* Handling API integration and deployment

---

# Learning Outcome

This project helped me improve my understanding of:

* MERN Stack Development
* REST APIs
* MongoDB Database Design
* Full Stack Deployment
* React State Management
* Responsive UI Design

---

# Author

Rohit Yadav

GitHub: https://github.com/Rohit777-7/SUPPORT_crm
