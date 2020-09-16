 primeFind = (num) => {
    var flag = 0;
    for(i=2; i<num/2; i++){
        if(num %i == 0)
        flag = 1;
    }
    if(flag == 1)
    return ('Not a prime number')
    else
    return ('Prime Number')
} 

module.exports.prime = primeFind