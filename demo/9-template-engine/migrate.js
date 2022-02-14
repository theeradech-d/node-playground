const db = require('./db')

async function init(){
    try {
        await  db.schema.dropTableIfExists('users')

        await  db.schema.createTable('users', function (table) {
            table.increments();
            table.string('username');
            table.string('password');
            table.timestamps();
        })
        
        await db('users').insert({
            username: "user1",
            password: "123456",
        })
        await db('users').insert({
            username: "user2",
            password: "123456",
        })

    } catch (error) {
        console.log(error)
    }
    
}

init()