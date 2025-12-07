import express from "express"
import { addStudent, allStudent, deleteStudent, editStudent, updateStudent } from "../controller/studentController.js"
import upload from "../middleware/multer.js"

const router = express.Router()

router.get('/', allStudent)
router.post('/add-students', upload.single('file'), addStudent)
router.get('/delete-student/:id', deleteStudent)
router.get('/edit-student/:id', editStudent)
router.post('/edit-student/:id', upload.single('file'), updateStudent)

export default router