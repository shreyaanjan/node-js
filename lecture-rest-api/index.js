const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const connectDb = require('./config/db.js')
const studentRouter = require('./routes/studentRoutes.js')
connectDb()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/students', studentRouter)

app.listen(PORT, (err) => {
    console.log(`http://localhost:${PORT}`);
})