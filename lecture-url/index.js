const http = require("http")
const url = require("url")

const PORT = 9000

const myServer = http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        const value = url.parse(req.url, true)
        console.log(value);
        console.log(req.url);
        if (req.url === '/') {
            res.end("Welcome To My Page");
        } else if (value.pathname === '/about') {
            res.end("This is About Page");
        } else {
            res.end("The End")
        }
    }
})

myServer.listen(PORT, () => {
    console.log("Server Started");
})