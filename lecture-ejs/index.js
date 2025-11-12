const express = require("express")
require('colors')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render(`index`)
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(PORT, (err) => {
    if (err) console.log("Server is Down.");
    console.log(`Server is running perfectly at port ${PORT}`.rainbow);
})