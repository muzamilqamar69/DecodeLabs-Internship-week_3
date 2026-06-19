# Student Record Management System

## Overview
The Student Record Management System is a full-stack application designed to manage student records efficiently. It allows users to create, read, update, and delete student information through a user-friendly interface. The application is built using React.js for the frontend and Node.js with Express.js for the backend, utilizing MongoDB as the database.

## Technologies Used
- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Project Structure
```
Student-Record-Management-System
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middlewares
│   │   ├── utils
│   │   └── app.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   └── package.json
└── README.md
```

## Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `src/config/db.js`.
4. Start the server:
   ```
   npm start
   ```

## Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- **GET /api/students**: Retrieve all students
- **GET /api/students/:id**: Retrieve a student by ID
- **POST /api/students**: Create a new student
- **PUT /api/students/:id**: Update a student by ID
- **DELETE /api/students/:id**: Delete a student by ID

## Usage
- Access the application in your browser at `http://localhost:3000`.
- Use the form to add new students and manage existing records.

## Error Handling
The application includes error handling middleware to manage errors gracefully and provide meaningful feedback to users.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is licensed under the MIT License.