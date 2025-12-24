const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    course: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Student = new mongoose.model("Student", studentSchema)
module.exports = Student