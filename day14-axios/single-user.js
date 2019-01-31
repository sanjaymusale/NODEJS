// url - https://jsonplaceholder.typicode.com/users/1

const axios = require('axios')
let id = process.argv[2]
const url = `https://jsonplaceholder.typicode.com/users/${id}`

//axios.get(url) return a PROIMSE (objects)

//promise - pending ( request initiation)
// -- promise resolved (success)
// -- promise rejected state (failure)


axios.get(url).then(function (response) {
    const user = response.data
    console.log(typeof user)
    console.log(`${user.id} . ${user.name} ${user.email}`)
}).catch(function(err){            // to handle Error
    console.log(err.messsag)
})