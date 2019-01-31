const cartItems = [
    {productName : 'marker', price : 15, quantity : 1},
    {productName : 'scale', price : 10, quantity : 2}
]


cartItems.forEach(function(mycart){
    console.log(`Product name : ${mycart.productName}  Price : ${mycart.price} Quantity : ${mycart.quantity}`)
})

cartItems.forEach(function(mycart){
    console.log(`Product name : ${mycart.productName}  Price : ${mycart.price} Quantity : ${mycart.quantity}`)
    
    var subtotal = mycart.quantity * mycart.price

    console.log(subtotal) 
})

let total = 0
let count = 0
cartItems.forEach(function(mycart){
    console.log(`Product name : ${mycart.productName}  Price : ${mycart.price} Quantity : ${mycart.quantity}`)
    
    total = total + mycart.quantity * mycart.price
    count = count + mycart.quantity   
    console.log('TOTAL AMOUNT :'+ total)
    console.log('TOTAL ITEMS : ' + count) 
})
