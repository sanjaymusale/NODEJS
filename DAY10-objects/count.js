let counter = {
    value : 0,
    up : function(){
        //inside a function defined inside an object,the value of this refers to the current object
        this.value = this.value + 1
        return this.value
    },
    down : function(){
        this.value = this.value - 1
        return this.value
    },
    reset : function(){
        this.value = 0
        return this.value
    },
    moveUpBy : function(n){
        this.value = this.value + n
        return this.value
    }
}

console.log(counter)
console.log(counter.up())
console.log(counter)
console.log(counter.up())
console.log(counter)

console.log(counter.down())
console.log(counter.moveUpBy(10))
