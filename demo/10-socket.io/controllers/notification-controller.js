const socketio = require("../socketio")

exports.send = function (req, res) {
    socketio.io().to(req.params.userId).emit("message", {
        message: req.query.msg,
        username: "SERVER"
    })

    res.send(`send to _id:${req.params.userId}`)
}