const express = require('express')
const cors = require('cors') // middleware to allow cross-origin requests, which allows web applications from different domains to make requests to the server 
const { db } = require('./db/db')
const {readdirSync} = require('fs') //file system module: read information in a specified directory

const app = express() // creating an instance of express application 



require('dotenv').config()

const PORT = process.env.PORT 

// middlewares that are added to express app 
app.use(cors()) //enables Cross-Origin Resource Sharing, allowing the server to accept requests from different domains.
app.use(express.json()) //parses incoming JSON requests and makes the JSON data available in req.body for route handling 

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
/* 
The code uses readdirSync to read the contents of the ./routes directory. 
For each file (presumably containing route definitions) in that directory, it maps the route by appending it to the base path /api/v1. 
This means that all routes defined in the files within the ./routes directory will be prefixed with /api/v1.
*/

// Creating a basic server 
const server = () => {
    db() // Connecting to MongoDB
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`) // starts the Express server by listening on a specific port 
    })
}

server() // calling the server function and set up the server

