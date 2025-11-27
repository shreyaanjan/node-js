import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    age: {
        type: Number,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
})

const Student = mongoose.model("Student", studentSchema)
export default Student