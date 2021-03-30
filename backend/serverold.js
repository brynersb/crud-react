
const express = require('express');
const cors = require('cors')
const routes = require("./routes")
const server = express();
const bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({​​​​​ extended:true }​​​​​))
// server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(routes)



server.listen(5000, function () {
    console.log("Server on")
})