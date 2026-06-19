import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentForm = ({ studentId, onFormSubmit, onCancel }) => {
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
        age: '',
        course: '',
        semester: '',
        cgpa: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (studentId) {
            axios.get(`/api/students/${studentId}`)
                .then(response => {
                    setStudentData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching student data:', error);
                });
        }
    }, [studentId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!studentData.name) newErrors.name = 'Name is required';
        if (!studentData.email) newErrors.email = 'Email is required';
        if (!studentData.age) newErrors.age = 'Age is required';
        if (!studentData.course) newErrors.course = 'Course is required';
        if (!studentData.semester) newErrors.semester = 'Semester is required';
        if (!studentData.cgpa) newErrors.cgpa = 'CGPA is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        if (studentId) {
            axios.put(`/api/students/${studentId}`, studentData)
                .then(response => {
                    onFormSubmit(response.data);
                })
                .catch(error => {
                    console.error('Error updating student:', error);
                });
        } else {
            axios.post('/api/students', studentData)
                .then(response => {
                    onFormSubmit(response.data);
                })
                .catch(error => {
                    console.error('Error creating student:', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={studentData.name} onChange={handleChange} />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={studentData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={studentData.age} onChange={handleChange} />
                {errors.age && <span>{errors.age}</span>}
            </div>
            <div>
                <label>Course:</label>
                <input type="text" name="course" value={studentData.course} onChange={handleChange} />
                {errors.course && <span>{errors.course}</span>}
            </div>
            <div>
                <label>Semester:</label>
                <input type="text" name="semester" value={studentData.semester} onChange={handleChange} />
                {errors.semester && <span>{errors.semester}</span>}
            </div>
            <div>
                <label>CGPA:</label>
                <input type="number" step="0.01" name="cgpa" value={studentData.cgpa} onChange={handleChange} />
                {errors.cgpa && <span>{errors.cgpa}</span>}
            </div>
            <button type="submit">{studentId ? 'Update' : 'Create'} Student</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default StudentForm;