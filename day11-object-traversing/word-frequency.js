const sentence = 'virat sachin virat virat sachin dhoni sachin'

let result = {}
const players = sentence.split(' ');
console.log(players);

players.forEach(function(name){
    if(result.hasOwnProperty(name)){
        result[name] = result[name] + 1
    }
    else
    {
        result[name] = 1
    }
})

for ( let key in result){
    console.log(`${key} - ${'*'.repeat(result[key])}`)
}

console.log(result);
