import express from "express"
import connectDb from "./config/db.js"
import upload from "./middleware/multer.js"
import Student from "./models/studentModels.js"

const app = express()
const PORT = 9000

app.set('view engine', 'ejs')

connectDb()

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/add-students', upload.single('file'), async (req, res) => {
    try {
        const data = req.body
        const doc = req.file.path

        const student = {
            ...data, photo:doc
        }

        const newStudent = new Student(student)
        await newStudent.save()
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, (err) => {
    console.log(`Server is running http://localhost:${PORT}`);
    if(err) console.log("Server is down.");
})