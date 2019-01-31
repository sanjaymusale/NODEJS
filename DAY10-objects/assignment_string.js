function difference(a,b){
    var arr1 = a;
    var arr2 = b;
    var arr = [];

    for(var i=0;i<arr1.length;i++)
    {
        if(!arr.includes(arr1[i]))
        {
            arr.push(arr1[i]);
        }
    }
    for(var i=0;i<arr2.length;i++)
    {
        if(!arr.includes(arr2[i]))
        {
            arr.push(arr2[i]);
        }
    }
    
    return arr;
}
var arr1 = [1, 2, 3,3];
var arr2 = [100, 2, 1, 10];
console.log(difference(arr1,arr2));