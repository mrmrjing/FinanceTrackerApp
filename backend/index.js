const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs') //file system module: read information in a specified directory
const app = express()
// const {db} = require('backend/db/db.js')


require('dotenv').config()

const PORT = process.env.PORT 

// middlewares  
app.use(cors())
app.use(express.json())

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))



// Creating a basic server 
const server = () => {
    // Connecting to MongoDB
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server()