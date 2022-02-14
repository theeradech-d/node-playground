// Import Library
const express = require('express')
const path = require('path')
const db = require('./db')
const mongodb = require('./mongodb')
const users = require('./models/user-model')
const route = require('./route')
const http = require('http');
const socketio = require('./socketio')

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

// Static file image, js, css
app.use(express.static(path.join(__dirname, 'public')));

// Template Engine using ejs
// default path /views
app.set('view engine', 'ejs');

// Declare Port
const port = 3000

app.use(route)

const server = http.createServer(app);
socketio.createSocketIo(server);

// Start server on port 3000
server.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})