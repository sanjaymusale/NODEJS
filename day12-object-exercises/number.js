var num = {
    values:[10,15,20,25],
    getEven : function(){
        /* var res=[];
        for(var i=0;i<this.values.length;i++){
            if(this.values[i] % 2 === 0){
                res.push(this.values[i])
            }
        }
        return res; */
        let res = this.values.filter(function(value){
            return value % 2 === 0
        })
        return res;
    },
    getOdd : function(){
        /*var res=[];
        for(var i=0;i<this.values.length;i++){
            if(this.values[i] % 2 !== 0){
                res.push(this.values[i])
            }
        }*/
        let res = this.values.filter(function(value){
            return value % 2 !== 0
        })
        return res;
    }
    


}

console.log(num.getEven());
console.log(num.getOdd());