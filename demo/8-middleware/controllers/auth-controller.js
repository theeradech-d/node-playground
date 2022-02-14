const jwt = require('jsonwebtoken');
const db = require('../db')
const config = require('../config')
const Users = require('../models/user-model')

exports.login = async function (req, res) {

    let username = req.body.username
    let password = req.body.password

    try {

        //let user = await db('users').select("*").where("username", username).where("password", password).first()
        let user = await Users.findOne({ username, password })
        
        if (!user) {
            throw new Error("ไม่พบผู้ใช้งาน")
        }

        var token = jwt.sign({
            userId: user._id
        }, config.secret, { expiresIn: '1h' });

        res.json({
            token
        })
        
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

exports.profile = async function (req, res) {
    res.json(req.user)
}