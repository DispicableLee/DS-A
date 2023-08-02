const k = 6

function isUgly(n){
    const primes = [2,3,5]
    if(n ===1|| primes.includes(n)) return true
    for(const c of primes){
        if(!(n%c===0)) return false
    }
    return true
}
console.log(isUgly(k))