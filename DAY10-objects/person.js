let person={
    firstName : 'sachin'
}

console.log(person)
console.log(typeof person)  //object
console.log(person.lastName)    //undefined
//add a new property into an object

person.lastName = 'tendulkar'
console.log(person)

//update a value of a property
person.firstName='SANJAY'

//remaove a property from an object
delete person.lastName
console.log(person)
console.log(person)

let student = new Object()

let product ={
    name : 'marker',
    price : 15,
    description : 'white board marker'
}

//if you want to know all properties of an object
console.log(Object.keys(product))

console.log(Object.values(product))

// to know if avalue is present in obj
console.log(Object.values(product).includes('marker'))  //true
console.log(Object.values(product).includes('camlin'))  //false


// to know if a property is present in obj

console.log(Object.keys(product).includes('reviews')) // false
console.log(Object.keys(product).includes('name')) // true


console.log(product.name == undefined)  //false
console.log(product.sellerInfo == undefined)    //true

//whenever we are trying to access a property of an object via a variable,we should always use [] notation and not . operator

let someKey = 'name'

console.log(product.someKey) // undefined
console.log(product[someKey]) //'marker' product['name']

//for in

for(let key in product){
    console.log(`${key}- ${product[key]}`)
}
