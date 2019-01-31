

var array = [["white","goodness"],["blue","tranquility"]]

let res = {};
array.forEach(function(color){
    res[color[0]] = color[1];
})

console.log(res);