const mongodb = require("../mongodb");
const { Schema } = mongodb;


const schema = new Schema({
    username: String,
    password: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Users = mongodb.model('users', schema);

module.exports = Users