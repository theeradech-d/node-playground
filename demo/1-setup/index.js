// Import Library
const express = require('express')

// Create Express
const app = express()

// Declare Port
const port = 3000

// Create route (http://localhost:3000/)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Start server on port 3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})