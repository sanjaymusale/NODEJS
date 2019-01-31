const person = {
    name : 'arjun',
    greet : function(){
        return 'from inside function'
    }
}

console.log(person.name)    //'arjun'
console.log(person.greet)   // [Function : greet]
//greet is a property / a method
console.log(person.greet())

