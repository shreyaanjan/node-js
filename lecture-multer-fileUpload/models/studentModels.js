import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    },
})

const Student = new mongoose.model("Student", studentSchema)
export default Student