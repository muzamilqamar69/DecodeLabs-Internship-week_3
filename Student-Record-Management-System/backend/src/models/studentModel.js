const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
    course: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
        min: 1,
    },
    cgpa: {
        type: Number,
        required: true,
        min: 0,
        max: 4,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

studentSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;