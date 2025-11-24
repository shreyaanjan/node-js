const express = require('express')
const app = express()

const mongoose = require("mongoose")
const mongooseURI = "mongodb://localhost:27017/app"

const PORT = 9000

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected successfully");
        })
        await mongoose.connect(mongooseURI)
    } catch (err) {
        console.log(err);
    }
}
connectDb()

app.listen(PORT, (err) => {
    console.log(`Server is running at http://localhost:${PORT}`);
    if (err) console.log("Server is down.");
})