function getUsers(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let user = {
                id:1,
                name:"users",
            }
            resolve(user)
        }, 2000)
    })
}
function getRoles(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let role = {
                id:1,
                name:"roles",
            }
            resolve(role)
        }, 2000)
    })
}
function getUserProducts(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let products = [
                {
                    id:1,
                    name:"product1",
                },
                {
                    id:2,
                    name:"product2",
                }
            ]
            resolve(products)
        }, 2000)
    })
}

async function loadData(){
    let user = await getUsers()
    let roles = await getRoles(user)
    let products = await getUserProducts(roles)
    return products
} 

loadData().then(function(products){
    console.log(products)
})