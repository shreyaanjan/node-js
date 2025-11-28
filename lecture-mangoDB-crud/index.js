import express from "express"
import connectDb from "./config/db.js"
import Student from "./models/studentModels.js"

const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

connectDb()

app.get("/", async (req, res) => {
    try {
        const students = await Student.find({})
        res.render("index", { students })
    } catch (error) {
        console.log(error);
    }
})

app.post('/add-students', async (req, res) => {
    try {
        const data = req.body
        const newStudent = new Student(data)
        await newStudent.save()
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

app.get('/edit-student/:editId', async (req, res) => {
    try {
        const { editId } = req.params
        const editStu = await Student.findById(editId)
        return res.render('edit', { editStu })
    } catch (error) {
        console.log(error);
    }
})

app.post('/edit-student/:editId', async (req, res) => {
    try {
        const { editId } = req.params
        const data = req.body
        await Student.findByIdAndUpdate(editId, data)
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

app.get('/delete-student', async (req, res) => {
    try {
        const { deleteId } = req.query
        await Student.findByIdAndDelete(deleteId)
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, (err) => {
    console.log(`Server running at http://localhost:${PORT}`);
    if (err) console.log("Server is down.");
})