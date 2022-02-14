const jwt = require('jsonwebtoken');
const config = require('../config');
const Users = require('../models/user-model');

async function AuthMiddleware(req, res, next) {

    let authorization = req.headers.authorization
    let token = authorization.replace("Bearer ", "")

    try {
        var decoded = jwt.verify(token, config.secret);

        let userId = decoded.userId

        let user = await Users.findOne({ _id: userId })

        req.user = user;
        
        next();
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

module.exports = AuthMiddleware