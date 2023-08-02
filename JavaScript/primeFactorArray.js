function isPrime(num){
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function primeFactorArray(num){
    let returned = []
    for(let i = 1; i<num; i++){
        if(num % i===0 && isPrime(i)){ 
            returned.push(i)
        }
    }
    return returned
}

console.log(primeFactorArray(60))
console.log(primeFactorArray(24))