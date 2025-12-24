const express = require('express')
const Student = require('../models/StudentModel.js')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data = await Student.find({})
        return res.status(200).json({
            message: "User Found",
            data: data,
            status: true,
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newStu = new Student(data)
        await newStu.save()

        return res.status(201).json({
            message: "Student Added",
            data: newStu,
            status: true,
        })
    } catch (error) {
        console.log(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedStu = await Student.findByIdAndDelete(id)
        return res.status(200).json({
            message: "Student Deleted",
            data: deletedStu,
            status: true,
        })
    } catch (error) {
        console.log(error);
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const editedStu = await Student.findByIdAndUpdate(id, data, { new: true })

        console.log(data);
        return res.status(200).json({
            message: "Student Data Edited",
            data: editedStu,
            status: true,
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router