// falsy - false,undefined,'',0,null,NaN
//truthy - 1,true,'dct cademy',[],{},all numbers except 0;

const values = [1,0,true,false,-1,10,[],{},'','dct academy',undefined ,null,NaN]

let truthyValues = []
let falsyValues = []

values.forEach(function(val){
    if(val){
        truthyValues.push(val);
    }
    else
    {
        falsyValues.push(val);
    }
})

console.log('thruthy values',truthyValues)
console.log('falsy values',falsyValues)
