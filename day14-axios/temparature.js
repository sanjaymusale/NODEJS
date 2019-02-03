const axios=require('axios')
let lat = process.argv[2]
let lng=process.argv[3]

let url2=`https://api.darksky.net/forecast/ky/${lat},${lng}`

axios.get(url2).then(function(response){
  let result = response.data
  let celsius = (`${result.currently.temperature}` - 32) * 5/9
 console.log(`Currently the temperature is ${celsius} degress`)
})
