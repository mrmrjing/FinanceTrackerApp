const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const app = express()
// const {db} = require('backend/db/db.js')


require('dotenv').config()

const PORT = process.env.PORT 

// middlewares  
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Creating a basic server 
const server = () => {
    // Connecting to MongoDB
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server()