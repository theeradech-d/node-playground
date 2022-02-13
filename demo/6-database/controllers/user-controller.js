const db = require('../db')

exports.index = async function (req, res) {
    let users = await db('users').select("*")
    res.json(users)
}

exports.detail = async function (req, res) {
    let user = await db('users').select("*").where("id", req.params.userId).first()
    res.json(user)
}