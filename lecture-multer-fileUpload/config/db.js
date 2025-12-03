import mongoose from "mongoose"
const mongoUri = "mongodb://localhost:27017/studentInfo"

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected successfully");
        })
        await mongoose.connect(mongoUri)
    } catch (error) {
        console.log(error);
    }
}

export default connectDb