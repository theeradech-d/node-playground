const db = require('../db')

exports.index = async function (req, res) {
    let users = await db('users').select("*")
    res.json(users)
}

exports.detail = async function (req, res) {
    let user = await db('users').select("*").where("id", req.params.userId).first()
    res.json(user)
}

exports.update = async function (req, res) {
    let user = await db('users').where("id", req.params.userId).update(req.body)
    res.json(true)
}

exports.create = async function (req, res) {
    let userId = await db('users').insert(req.body)
    res.json(userId)
}

exports.delete = async function (req, res) {
    let result = await db('users').where("id", req.params.userId).delete()
    res.json(true)
}