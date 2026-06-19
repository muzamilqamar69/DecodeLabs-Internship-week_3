import React, { useEffect, useState } from 'react';
import StudentList from '../components/StudentList';
import { getStudents } from '../services/api';

const HomePage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudents();
                setStudents(data);
            } catch (error) {
                console.error("Error fetching students:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Student Record Management System</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h2 className="text-xl mb-2">Total Students: {students.length}</h2>
                    <StudentList students={students} />
                </>
            )}
        </div>
    );
};

export default HomePage;