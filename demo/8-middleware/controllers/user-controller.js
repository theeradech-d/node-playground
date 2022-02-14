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

exports.update = async function (req, res) {
    //let user = await db('users').where("id", req.params.userId).update(req.body)
    let user = await Users.findOneAndUpdate({id: req.params.userId}, req.body)
    res.json(true)
}

exports.create = async function (req, res) {
    //let userId = await db('users').insert(req.body)
    let user = await Users.create(req.body)
    res.json(user)
}

exports.delete = async function (req, res) {
    //let result = await db('users').where("id", req.params.userId).delete()
    let user = await Users.deleteOne({id: req.params.userId})
    res.json(true)
}