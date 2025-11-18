const express = require('express')
const app = express()
const PORT = 9000;

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

let students = [
    {
        id: 1,
        name: "Shreya Anjan",
        course: "fsd",
        mail: "shreya@mail.com"
    },
    {
        id: 2,
        name: "Janvi Patel",
        course: "ui/ux",
        mail: "janvi@mail.com"
    },
    {
        id: 3,
        name: "Dev Das",
        course: "ai-ml",
        mail: "devdas@mail.com"
    },
    {
        id: 4,
        name: "Aryan Patel",
        course: "cyber-security",
        mail: "aryan@mail.com"
    }
]
app.get("/", (req, res) => {
    res.render('index', {
        students
    })
})

app.post("/add-students", (req, res) => {
    let addStudent = req.body
    students.push(addStudent)
    res.redirect("/")
})

app.get("/delete-student", (req, res) => {
    let deleteId = req.query.studentId

    students = students.filter((stuId) => {
        return stuId.id != deleteId
    })
    return res.redirect('/')
})

app.get("/edit-student", (req, res) => {
    let editId = req.query.studentId

    // finding student which want to update
    let studentData = students.find((stuId) => {
        return stuId.id == editId
    })

    return res.render('edit', {
        studentData
    })
})

app.post("/edit-student", (req, res) => {
console.log(req.body);

    // finding index of particular student in array
    let studentIdx = students.findIndex((stu) => {
        return stu.id == req.body.id
    })
    console.log(studentIdx);
    students[studentIdx] = req.body
    // console.log(students);
    return res.redirect('/')
})

app.listen(PORT, (err) => {
    if (err) console.log("Server is down.")
    console.log(`Server is running perfectly at port : ${PORT}`);
    console.log('http://localhost:9000/');
})