//object is an unordered, string indexed

const productArr = ['marker',15,'white board',false,'camlin']
console.log(productArr[1])
console.log(productArr[2])
console.log(productArr[4])
console.log(`the cost of ${productArr[0]} is ${productArr[1]}. it is ${productArr[2]}`)

const product = {
    'name' : 'marker',
    'price' : 15,
    'description' : 'white board marker',
    'codEligible' : false,
    'brand' : 'camlin',
    'seller': ['sri venkatesh','ss paper mart'],
    'reviews':[
        {userName:'arjun','rating':4,'body':'long lasting'},
        {userName:'gaja','rating':3,'body':'nice'}
    ]
}

console.log(product.name)
console.log(product.price)
console.log(product.description)

console.log(`the cost of ${product.name} is ${product.price} . it is a ${product.description}`)

console.log(`listing reviews - ${product.reviews.length}`)
product.reviews.forEach(function(review){
    console.log(`${review.userName} has rated ${review.rating}`)
})

const article = {
    'articles':[
        {title:'forgoten PM',}
    ]
}