const express = require("express")
const app = express()
const PORT = 9000

app.get('/', (req, res) => {
    res.send("Welcome to My Page")
})

app.get('/about', (req, res) => {
    res.send(`About ${req.query.name}`)
})

app.listen(PORT, () => {
    console.log(`Server is successfully runnig at Port No : ${PORT}`);
})