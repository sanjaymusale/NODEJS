function stringChop(a,b){
    var str = a;
    var res = [];
    var j = 0;
    console.log(str.length);
    if(b === undefined){
         res[j] = a;
         return res;
    }
    for (i = 0; i < str.length; i++){
        if(j>str.length || str.substr(j,b) === "" )
        {
            break;
        }
        res[i] = str.substr(j, b);
        j=j+b;
       
    }
    return res;

}

console.log(stringChop('resource'));
console.log(stringChop('dcresource',3));


function capitalizeWords(a){
    var str = a;
    var words = a.split(" ");
    if (str === "")
    {
        return "empty string";
    }
    else{
    for (var i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
       }
   
        return words.join(" ");
    }
}

console.log(capitalizeWords('js string exercises'));














