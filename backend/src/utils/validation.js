export const validateStudentData = (data) => {
    const errors = {};

    if (!data.name || data.name.trim() === '') {
        errors.name = 'Name is required';
    }

    if (!data.email || data.email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email format is invalid';
    }

    if (!data.age || data.age < 0) {
        errors.age = 'Age must be a positive number';
    }

    if (!data.semester || data.semester < 1 || data.semester > 8) {
        errors.semester = 'Semester must be between 1 and 8';
    }

    if (!data.cgpa || data.cgpa < 0 || data.cgpa > 4.0) {
        errors.cgpa = 'CGPA must be between 0 and 4.0';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};