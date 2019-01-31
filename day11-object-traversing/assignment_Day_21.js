function minMaxKeyInObject(a){
    for (let key in elements) {
        arrayElements.push(key);
    }
    var max = Math.max(...arrayElements);
    var min = Math.min(...arrayElements);
    array.push(min, max);
    return array;
}

var array = [];
var arrayElements = [];
const elements = {
    2: 'a',
    7: 'b',
    1: 'c',
    10: 'd',
    4: 'e'
};
console.log(minMaxKeyInObject(elements));
