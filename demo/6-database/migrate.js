const db = require('./db')

async function init(){
    try {
        let res = await  db.schema.createTable('users', function (table) {
            table.increments();
            table.string('name');
            table.timestamps();
        })
        
        await db('users').insert({
            name: "user 1",
        })
        await db('users').insert({
            name: "user 2",
        })
        await db('users').insert({
            name: "user 3",
        })
        await db('users').insert({
            name: "user 4",
        })

    } catch (error) {
        console.log(error)
    }
    
}

init()