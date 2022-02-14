const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devMongoTest:KUyNbNhzMIbIODnf@cluster0.u6rl3.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));

module.exports = mongoose