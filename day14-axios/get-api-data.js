
const axios = require('axios');
let location = process.argv[2]
let url = `http://www.mapquestapi.com/geocoding/v1/address?key=cBZ1u0y2EkdZIa2PAq4aHGy6RKU1cDtX&location=${location}`
let lat = 0,lng = 0;
axios.get(url).then(function(response){
    let loc = response.data
    lat = loc.results[0].locations[0].latLng.lat
    lng = loc.results[0].locations[0].latLng.lng
    console.log(`${lat}  ${lng}`)
})

let url2=`https://api.darksky.net/forecast/7d9e69b2c4bd31c94faf3b9f5c479028/${lat},${lng}`

axios.get(url2).then(function(response){
  let result = response.data
  let celsius = (`${result.currently.temperature}` - 32) * 5/9
 console.log(`Currently the temperature in ${location} is ${Math.floor(celsius)} degress`)

})

