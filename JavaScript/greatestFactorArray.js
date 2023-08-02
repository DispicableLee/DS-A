function greatestFactorArray(array) {
    // your code here
    let factors = []
    for(i = 0; i<array.length; i++){
        let curr = array[i]
        let gF = greatestFactor(curr)
        console.log(gF)
    }
}


function greatestFactor(n){
    for(let i = n-1; i>0; i--){
        if(n%i===0) return i
    }
}

console.log(greatestFactorArray([16, 7, 9, 14])) // [8, 7, 9, 7]
// console.log(greatestFactorArray([30, 3, 24, 21, 10])) // [15, 3, 12, 21, 5]