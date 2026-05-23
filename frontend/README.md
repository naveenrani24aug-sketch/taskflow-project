# TaskFlow - Full Stack Task Management App

A full-stack task management application built with React, TypeScript, Express, and MongoDB.

## Group Information
- **Group No:** 2
- **Section:** BSCS 6A
- **Members:**
  - Naveenta (2312124) - Frontend
  - Kashish Hotwani (2312118) - Backend

## Technologies Used
- **Frontend:** React, TypeScript, Vite, React Router, Axios
- **Backend:** Node.js, Express, TypeScript, Mongoose
- **Database:** MongoDB Atlas

## Features
- List all tasks
- Create new task
- Delete task
- Edit task (Bonus)
- Search tasks by title and description (Group 2 - Product Feature)
- Empty state design (Group 2 - Engineering Feature)
- Login page (Bonus +3)

## How to Install and Run

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Create a `.env` file in the `backend` folder:

## API Routes
- GET /tasks - Get all tasks
- GET /tasks?search=keyword - Search tasks
- POST /tasks - Create task
- DELETE /tasks/:id - Delete task
- PUT /tasks/:id - Update task

## MongoDB Setup
- Database hosted on MongoDB Atlas
- Connection string required in .env file