const express = require('express')
const app = express()
const PORT = 9000;

app.set("view engine", "ejs")

const students = [
    {
        id: 1,
        name: "Shreya Anjan",
        course: "FSD",
        mail: "shreya@mail.com"
    },
    {
        id: 2,
        name: "Janvi Patel",
        course: "UI/UX",
        mail: "janvi@mail.com"
    },
    {
        id: 3,
        name: "Dev Das",
        course: "AI/ML",
        mail: "devdas@mail.com"
    },
    {
        id: 4,
        name: "Aryan Patel",
        course: "Cyber Security",
        mail: "aryan@mail.com"
    }
]
app.get("/", (req, res) => {
    res.render('index', {
        data: students
    })
})

app.listen(PORT, (err) => {
    if (err) console.log("Server is down.")
    console.log(`Server is running perfectly at port : ${PORT}`);
    console.log('http://localhost:9000/');
})