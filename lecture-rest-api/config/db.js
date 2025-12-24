const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("DB connected");
        })
        await mongoose.connect(MONGO_URI)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb