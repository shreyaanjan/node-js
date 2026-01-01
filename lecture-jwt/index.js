const dontenv = require('dotenv')
dontenv.config()

const express = require('express')
const connectDb = require('./config/db.js')
const authRouter = require('./routes/authRouter.js')
const viewAuthRouter = require('./routes/viewAuthRouter.js')
const cookieParser = require('cookie-parser')
const blogRouter = require('./routes/blogRouter.js')
const clientRouter = require('./routes/clientRouter.js')

const app = express()
const PORT = process.env.PORT

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

connectDb()

// Rest
app.use('/api/auth', authRouter)
// EJS
app.use('/auth', viewAuthRouter)
app.use('/blog', blogRouter)
app.use('/', clientRouter)

app.listen(PORT, (err) => {
    console.log(`http://localhost:${PORT}`);
})