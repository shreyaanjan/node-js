import express from "express"
import connectDb from "./config/db.js"
import studentRouter from "./routers/studentRoute.js"

const app = express()
const PORT = 7000

app.set('view engine', 'ejs')
app.use("/uploads", express.static("uploads"))
app.use(express.urlencoded({ extended: true }))

connectDb()

app.use('/', studentRouter)

app.listen(PORT, (err) => {
    console.log(`Server is running http://localhost:${PORT}`);
    if (err) console.log("Server is down.");
})