// local module 
// common js method

// import { div, mul } from "./calc.js";

// const { add, sub } = require("./calc")
// console.log(add(10, 20), sub(30, 20));

// module method

// console.log(mul(2, 2));
// console.log(div(10, 2));

const fs = require("fs")
const os = require("os")

fs.writeFileSync("copy-file.txt", "Hello Node !")
fs.writeFileSync("copy-file.txt", "How are you ?")

const res = fs.readFileSync("copy-file.txt", "utf-8")
// console.log(res);
fs.writeFileSync("main-data.txt", "hello! kaise ho ji? khana kha ke jana thik hai ji !")
fs.copyFileSync("main-data.txt", "copy-file.txt")
fs.mkdirSync("./src", { recursive: true })
fs.unlinkSync("copy-file.txt")

const core = os.cpus()
console.log(core.length);