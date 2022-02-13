// Import Library
const express = require('express')

// Create Express
const app = express()

app.use(express.json());  // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Declare Port
const port = 3000

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

// PUT method route
app.put('/', function (req, res) {
    res.send('PUT request to the homepage')
})

// DELETE method route
app.delete('/', function (req, res) {
    res.send('DELETE request to the homepage')
})

app.get('/users/:userId', function (req, res) {
    res.send(req.params)
})

app.post('/users/:userId', function (req, res) {
    res.send(req.body)
})

// Start server on port 3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})