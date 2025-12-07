import Student from "../models/studentModels.js"
import fs from "fs"
import { fileURLToPath } from "url"
import path from "path"

const fileName = fileURLToPath(import.meta.url)
const directoryName = path.dirname(fileName)

const allStudent = async (req, res) => {
    const students = await Student.find({})
    res.render('index', { students })
}

const addStudent = async (req, res) => {
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
}

const deleteStudent = async (req, res) => {
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
}

const editStudent = async (req, res) => {
    try {
        const { id } = req.params
        const editStu = await Student.findById(id)
        res.render('edit', { editStu })
    } catch (error) {
        console.log(error);
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const student = await Student.findById(id)
        const updatedData = req.body

        if (req.file) {
            const oldImgPath = path.join(directoryName, student.photo)
            fs.unlink(oldImgPath, (err) => {
                if (err) {
                    console.log(err);
                }
            })

            const newImgPath = req.file.path
            updatedData.photo = newImgPath
        }
        await Student.findByIdAndUpdate(id, updatedData)
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

export { allStudent, addStudent, deleteStudent, editStudent, updateStudent } 