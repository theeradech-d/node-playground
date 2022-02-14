const jwt = require('jsonwebtoken');
const { Server } = require("socket.io");
const config = require('./config');
const Users = require('./models/user-model');

let io
let onlineUser = {}

module.exports = {
    createSocketIo(server) {
        io = new Server(server);

        // Auth Middleware
        io.use(async (socket, next)=>{
            try {
                let authorization = socket.handshake.auth.token
                let token = authorization.replace("Bearer ", "")

                var decoded = jwt.verify(token, config.secret);

                let userId = decoded.userId

                let user = await Users.findOne({ _id: userId })

                socket.user = user;
                
                next();
            } catch (error) {
                next(error)
            }

        })

        // On Socket Connect
        io.on('connection', (socket) => {

            console.log('a user connected');

            onlineUser[socket.user._id] = socket.user

            io.emit("onlineUser", onlineUser)

            // Event on client
            socket.on('sendMessage', (data) => {
                data.username = socket.user.username
                io.emit("message", data)
            });

            socket.on('disconnect', () => {
                console.log("disconnect")
                delete onlineUser[socket.user._id]
                io.emit("onlineUser", onlineUser)
            });

        });

        return io
    },
    io
}