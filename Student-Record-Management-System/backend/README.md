# Student Record Management System - Backend

## Overview
The Student Record Management System is a full-stack application that allows users to manage student records. This backend is built using Node.js, Express.js, and MongoDB.

## Features
- Create, Read, Update, and Delete (CRUD) operations for student records.
- Validation of student data.
- Error handling middleware.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- MongoDB installed and running, or access to a MongoDB Atlas account.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd Student-Record-Management-System/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database connection in `src/config/db.js`:
   - Update the MongoDB URI to point to your database.

4. Start the server:
   ```
   npm start
   ```

### API Endpoints
- **POST /students**: Create a new student record.
- **GET /students**: Retrieve all student records.
- **GET /students/:id**: Retrieve a student record by ID.
- **PUT /students/:id**: Update a student record by ID.
- **DELETE /students/:id**: Delete a student record by ID.

### Error Handling
The application includes middleware for handling errors. Ensure to handle errors gracefully in your API calls.

## Usage Examples
- To create a new student, send a POST request to `/students` with the student data in the request body.
- To retrieve all students, send a GET request to `/students`.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.