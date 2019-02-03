// http://gender-api.com/get?name=salmana&key=pRPLCejozFwCHFbVCR

const axios = require('axios');
let name = 'sanjay'
let url = `http://gender-api.com/get?name=${name}&key=`

axios.get(url).then(function(response){
    let gen = response.data
    console.log(`Name ${name} and gender is ${gen.gender}`)
    //console.log(`gender`)

    //console.log(response)
})


