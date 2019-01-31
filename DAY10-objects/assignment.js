function fakeBinary(a){

    for (var i = 0; i < a.length; i++){
        if (a[i] < 5) {
            a[i] = 0;
        } else {
            a[i] = 1;
        }
    }
    return a;
}
var a = '3457'
console.log(fakeBinary(a));