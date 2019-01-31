function squareEvenNumbers(a){
    var array = a;
    var sum = 0, sqr = 0;
    array.forEach(function (num) {
        if (num % 2 === 0) {
            sqr = num * num;
            sum = sum + sqr; 
        }
    })
    return sum;
}

var array = [1, 2, 3, 4, 5];
console.log(squareEvenNumbers(array));