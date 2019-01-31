function strWeight(a, b) {
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
    var sum1 = 0, sum2 = 0;
    var str1 = a.split("");
    var str2 = b.split("");
    for (i = 0; i < str1.length; i++){
        for (j = 0; j < alpha.length; i++){
            if (str1[i] === alpha[j])
            {
                sum1 += (j + 1);
            }
            if (str2[i] === alpha[j]) {
                sum2 += (j + 1);
            }
        }
    }
    if (sum1 > sum2)
    {
        return 1;
    } else if (sum1 < sum2)
    {
        return 2
    } else {
        return "equal";
    }

}

console.log(strWeight("batman", "superman"));