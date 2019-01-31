//crearte object called as person 

//properties - firstName ,lastName
//method - greet()

//person.greet()  'hello,firstName lastName


let person = {
    firstName: 'sanjay',
    lastName : 'musale',
    greet : function(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

console.log(person.greet());