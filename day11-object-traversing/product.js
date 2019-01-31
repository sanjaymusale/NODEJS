let product = {
    name : 'marker',
    price : 15,
    details : function(){
        return `${this.name} INR ${this.price}`
    }
}

console.log(product.name);
console.log(product.price);
console.log(product.details());

