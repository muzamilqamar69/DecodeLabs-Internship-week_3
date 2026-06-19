import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('/api/students');
                setStudents(response.data);
            } catch (err) {
                setError('Error fetching students');
            }
        };

        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/students/${id}`);
            setStudents(students.filter(student => student._id !== id));
        } catch (err) {
            setError('Error deleting student');
        }
    };

    return (
        <div>
            <h2>Student List</h2>
            {error && <p>{error}</p>}
            <ul>
                {students.map(student => (
                    <li key={student._id}>
                        {student.name} - {student.email}
                        <button onClick={() => handleDelete(student._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;