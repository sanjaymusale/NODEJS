const mobiles = [
    { id : 1 ,
      name : 'redmi 5',
      price :14500,
      colors:['black','gold']    
    },
    { id : 2,
      name:'samsung',
      price : 13500,
      colors:['black','blue']
     }
]

console.log('listing mobiles - ' + mobiles.length);
mobiles.forEach(function(mobile){
    console.log(`${mobile.name} price is ${mobile.price} available in ${mobile.colors.join(', ')}`);
});


