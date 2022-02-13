// Import Library
const express = require('express')
const db = require('./db')
const route = require('./route')

// Create Express
const app = express()

app.use(express.json());  // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Declare Port
const port = 3000

app.use(route)

// Start server on port 3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})