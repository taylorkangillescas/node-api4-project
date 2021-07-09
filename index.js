const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 9000

console.log("Its alive")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.FOOD)
console.log(process.env.REALLY)
console.log(process.env.GREET)