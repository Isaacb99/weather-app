const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

const server = express()

server.name = "API"
server.use(express.json())
server.use(cookieParser())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

module.exports = server
