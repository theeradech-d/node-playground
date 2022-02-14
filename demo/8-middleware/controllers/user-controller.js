const db = require('../db')
const Users = require('../models/user-model')

exports.index = async function (req, res) {
    //let users = await db('users').select("*")
    let users = await Users.find()
    res.json(users)
}

exports.detail = async function (req, res) {
    //let user = await db('users').select("*").where("id", req.params.userId).first()
    let user = await Users.findOne({id: req.params.userId})
    res.json(user)
}