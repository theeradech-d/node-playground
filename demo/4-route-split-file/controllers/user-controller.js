exports.index = function (req, res) {
    res.json([
        {
            id: 1,
            name: "user1",
        },
        {
            id: 2,
            name: "user2",
        }
    ])
}

exports.detail = function (req, res) {
    let user = {
        id: req.params.userId,
        name: "my name",
    }
    res.json(user)
}