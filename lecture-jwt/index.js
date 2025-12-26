const dontenv = require('dotenv')
dontenv.config()

const express = require('express')
const connectDb = require('./config/db.js')
const authRouter = require('./routes/authRouter.js')

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectDb()

app.use('/auth/users/', authRouter)

app.listen(PORT, (err) => {
    console.log(`http://localhost:${PORT}`);
})