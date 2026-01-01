const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.js');
const User = require('../models/UserModule.js');

router.get("/", authMiddleware, async (req, res) => {
    try {
        const { id } = req.user
        const user = await User.findById(id)

        return res.render('profile', {
            user
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/addBlog', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
})

module.exports = router