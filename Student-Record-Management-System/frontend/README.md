# Student Record Management System - Frontend

## Overview
The Student Record Management System is a full-stack application built using React.js for the frontend and Node.js with Express.js for the backend. This application allows users to manage student records, including creating, reading, updating, and deleting student information.

## Features
- User-friendly interface for managing student records.
- Form validation to ensure data integrity.
- Responsive design for various devices.
- Integration with a MongoDB database for persistent storage.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (for backend)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Student-Record-Management-System
   ```

2. Navigate to the frontend directory:
   ```
   cd frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

   The application will be running on `http://localhost:3000`.

### Folder Structure
```
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── StudentForm.js
│   │   └── StudentList.js
│   ├── pages
│   │   └── HomePage.js
│   ├── services
│   │   └── api.js
│   ├── App.js
│   └── index.js
└── package.json
```

### Usage
- Navigate to the home page to view the total number of students.
- Use the Student Form to add new student records.
- View the list of students and use options to edit or delete records.

### API Integration
The frontend communicates with the backend API to perform CRUD operations on student records. Ensure the backend server is running to interact with the API.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.