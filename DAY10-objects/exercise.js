var cart = [
    {
    name : 'air max707',
    price : 100,
    quantity : 1
    },
    {
        name : 'bata',
        price : 200,
        quantity : 2
    }
]
function calculateTotal(cart){
    var sum = 0;
    var total = 0;
    cart.forEach(function(item){
        sum = item.price * item.quantity;
        total += sum;

    })
    return total;
        
    };

    console.log(calculateTotal(cart));
