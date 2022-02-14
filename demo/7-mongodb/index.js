// Import Library
const express = require('express')
const db = require('./db')
const mongodb = require('./mongodb')
const users = require('./models/user-model')
const route = require('./route')

mongodb.connection.on('connected', async function(){
    console.log("mongodb connected")
});
mongodb.connection.on('error', function(){
    console.log("error connected")
});
mongodb.connection.on('disconnected', function(){
    console.log("disconnected connected")
});

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