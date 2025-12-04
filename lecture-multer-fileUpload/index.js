import express from "express"
import connectDb from "./config/db.js"
import upload from "./middleware/multer.js"
import Student from "./models/studentModels.js"
import fs from "fs"
import { fileURLToPath } from "url"
import path from "path"

const app = express()
const PORT = 9000

app.set('view engine', 'ejs')
app.use("/uploads", express.static("./uploads"))
app.use(express.urlencoded({ extended: true }))

connectDb()

const fileName = fileURLToPath(import.meta.url)
const directoryName = path.dirname(fileName)

app.get('/', async (req, res) => {
    const students = await Student.find({})
    res.render('index', { students })
})

app.post('/add-students', upload.single('file'), async (req, res) => {
    try {
        const data = req.body
        const doc = req.file.path
        console.log(doc);
        const student = {
            ...data, photo: doc
        }

        const newStudent = new Student(student)
        await newStudent.save()
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

app.get('/delete-student/:id', async (req, res) => {
    try {
        const { id } = req.params
        const student = await Student.findById(id)
        const imgPath = path.join(directoryName, student.photo)

        fs.unlink(imgPath, (err) => {
            console.log(err);
        })

        await Student.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

app.get('/edit-student/:id', async (req, res) => {
    try {
        const { id } = req.params
        const editStu = await Student.findById(id)
        res.render('edit', { editStu })
    } catch (error) {
        console.log(error);
    }
})

app.post('/edit-student/:id', upload.single('file'), (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, (err) => {
    console.log(`Server is running http://localhost:${PORT}`);
    if (err) console.log("Server is down.");
})