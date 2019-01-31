const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

console.log('name',user.name)
console.log('email',user.email)
console.log('address- street',user.address.street)
console.log('address-city',user.address.city)
console.log('address-city',user['address']['city'])
console.log('adrress - geo',user.address.geo)
console.log('address - geo - lng',user.address.geo.lng)
console.log('address - geo - lat',user.address.geo.lat)

console.log(Object.keys(user))
console.log(Object.values(user))

// 1. name - username - email - (street,city,zipcode) - (lat,lng) - phone - (companyname - catchphrase)
var string = user.id +'. '+user.name + '- ' + user.email + '- ('+ user.address.street + ',' + user.address.city + ',' + user.address.zipcode + ') - (' + user.address.geo.lat + ', '+ user.address.geo.lng + ' ) - ' + user.phone + ' - (' + user.company.name + ' - ' + user.company.catchPhrase 

console.log(string)