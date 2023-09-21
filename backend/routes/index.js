const express = require('express')
const cors = require('cors')
const app = express()

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
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server()